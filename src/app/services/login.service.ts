import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { APIROOT } from 'src/environments/environment';

@Injectable() 
export class LoginService {
    api = `${APIROOT}login`;

    constructor(private http: HttpClient){}

    logar(dadosLogin) {
        return this.http.post(this.api, dadosLogin)
            .pipe(
                map((response: any) => {
                    localStorage.setItem('TOKEN', response.token);
                    return response;
                })
            )
    }
    
}