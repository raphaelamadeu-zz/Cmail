import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private roteador: Router){}

    /**
     * checks if the token exists
     * 
     * @param {tipodoparametro} nomedoparametro o que e o parametro
     * @return {boolean} retorna se a rota pode ser acessada
     */

    canActivate(): boolean {
        if(localStorage.getItem('TOKEN')) {
            return true;
        } else {
            this.roteador.navigate(['/login']);
            return false;
        }
    }
}