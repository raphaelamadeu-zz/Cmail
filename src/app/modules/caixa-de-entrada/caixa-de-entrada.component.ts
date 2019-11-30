import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailService } from '../../services/email.service';
import { PageDataService } from 'src/app/services/page.service';
import { HeaderDataService } from 'src/app/services/header.service';

@Component(
    {
        selector: 'cmail-caixa-de-entrada',
        templateUrl: './caixa-de-entrada.component.html',
        styles: []
    }
)
export class CaixaDeEntradaComponent implements OnInit {
    private _isNewEmailFormOpen = false;

    constructor(private emailService: EmailService,private pageService: PageDataService, private headerService: HeaderDataService){}

    emailList = []
    email = {
        destinatario: '',
        assunto: '',
        conteudo: ''
    }

    errorMessage = ''

    termosParaFiltro = ''

    ngOnInit() {
        this.emailService
            .listar()
            .subscribe(
                lista => {
                    this.emailList = lista
                }
            );
        
        this.pageService.defineTitulo('Caixa de entrada - Cmail');
        this.headerService.valorDoFiltro.subscribe(novoValor => this.termosParaFiltro = novoValor)
    }

    handleRemoveEmail(eventoVaiRemover, emailId){
        if(eventoVaiRemover.status==='removing'){
            this.emailService
                .deletar(emailId)
                .subscribe(
                    res => {
                        console.log(res);
                        this.emailList = this.emailList.filter(email => email.id != emailId)
                    }, err => console.log(err)
                )
        }
    }

    get isNewEmailFormOpen() {
        return this._isNewEmailFormOpen;
    }

    toggleNewEmailForm() {
        this._isNewEmailFormOpen = !this._isNewEmailFormOpen;
    }

    handleNewEmail(formEmail: NgForm) {
        if (formEmail.invalid) return;

        this.emailService
            .enviar(this.email)
            .subscribe(
                emailApi => {
                    this.emailList.push(emailApi);
                    this.email = {destinatario: '', assunto: '', conteudo: ''}
                    formEmail.reset();
                },
                erro => {
                    this.errorMessage = erro.message;
                    setTimeout(() => this.errorMessage = '', 5000)
                }
            )
        
    }

    filtrarEmailsPorAssunto() {
        const termoParaFiltroEmMinusculo = this.termosParaFiltro.toLowerCase();

        return this.emailList.filter(email => {
            const assunto = email.assunto.toLowerCase();
            return email.assunto.includes(termoParaFiltroEmMinusculo);
        })
    }
}