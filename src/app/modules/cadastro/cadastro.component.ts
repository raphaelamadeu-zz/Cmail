import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpResponseBase, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

import { User } from '../../models/user';
import { PageDataService } from 'src/app/services/page.service';

@Component({
  selector: 'cmail-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

  formCadastro = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    username: new FormControl('', Validators.required),
    senha: new FormControl('', Validators.required),
    avatar: new FormControl('', Validators.required, this.validaImagem.bind(this)),
    telefone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{4}-?[0-9]{4}[0-9]?')])
  });

  mensagensErro = '';

  handleCadastrarUsuario(){
    if(this.formCadastro.valid){
      const userData = new User(this.formCadastro.value);

      this.httpClient
          .post('http://localhost:3200/users', userData)
          .subscribe(
            () => {
              console.log('Cadastrado com sucesso');
              this.formCadastro.reset();

              setTimeout(() => {
                this.roteador.navigate(['/login']);
              })
            }, (responseError: HttpErrorResponse) => {
              this.mensagensErro = responseError.error.body;
            }
          )
    } else {
      console.log('abubinaaaa');
      this.validarTodosOsCamposDoFormulario(this.formCadastro);
    }
  }

  validarTodosOsCamposDoFormulario(form: FormGroup) {
    Object.keys(form.controls).forEach(field => {
      const control = form.get(field)
      control.markAsTouched({onlySelf: true});
    })
  }

  validaImagem (campoDoFormulario: FormControl){
    return this.httpClient
            .head(campoDoFormulario.value, {
              observe: 'response'
            })
            .pipe(
              map((response: HttpResponseBase) => {
                return response.ok ? null : { urlInvalida: true }
              }),
              catchError((error) => {
                return [{urlInvalida: true}]
              })
            )
  }
  constructor(private httpClient: HttpClient,private roteador: Router, private pageService: PageDataService) { }

  ngOnInit() {
    this.pageService.defineTitulo('Cadastro - Cmail')
  }

}
