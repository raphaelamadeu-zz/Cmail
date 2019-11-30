import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { PageDataService } from 'src/app/services/page.service';

@Component({
  selector: 'cmail-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = {
    email: '',
    password: ''
  }

  mensagemErro = '';

  constructor(private httpClient: HttpClient, private roteador: Router, private loginService: LoginService, private pageService: PageDataService) { }

  ngOnInit() {
    this.pageService.defineTitulo('Login - Cmail')
  }

  handleLogin(formLogin: NgForm){
    if(formLogin.valid){
      this.loginService
        .logar(this.login)
        .subscribe(
          () => this.roteador.navigate(['/inbox']),
          (responseError: HttpErrorResponse) => this.mensagemErro = responseError.error.message
        )
    }
  }

}
