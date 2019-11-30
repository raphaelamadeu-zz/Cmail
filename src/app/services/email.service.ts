import {Injectable} from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http'
import {Email} from '../models/email';
import { map } from 'rxjs/operators';
import { APIROOT } from 'src/environments/environment';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class EmailService {
    api = `${APIROOT}emails`;
    cabecalho = new HttpHeaders({'Authorization': localStorage.getItem('TOKEN')});

    constructor(private http: HttpClient) {}

    listar() {
        return this.http
                    .get(this.api, {headers: this.cabecalho})
                    .pipe<Email[]>(
                        map((response: any[]) => response.map(
                            emailApi => new Email({
                                destinatario: emailApi.to,
                                assunto: emailApi.subject,
                                conteudo: emailApi.content,
                                dataDeEnvio: emailApi.created_at,
                                id: emailApi.id
                            })
                        ))
                    )
    }

    deletar(id){
        return this 
                .http
                .delete(`${this.api}/${id}`, {headers: this.cabecalho})
    }

    enviar({destinatario, assunto, conteudo}) {
        const emailParaApi = {
            to: destinatario,
            subject: assunto,
            content: conteudo
        }

        return this.http
                .post(this.api, emailParaApi, {headers: this.cabecalho})
                .pipe<Email>(
                    map(
                        (emailApi: any) => {
                            return new Email(
                                {
                                    destinatario: emailApi.to,
                                    assunto: emailApi.subject,
                                    conteudo: emailApi.content,
                                    dataDeEnvio: emailApi.created_at,
                                    id: emailApi.id
                                }
                            )
                        }
                    )
                )

    }
}