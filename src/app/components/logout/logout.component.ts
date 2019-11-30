import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component(
    {
        template: `<h2>Logging out...</h2>`
    }
)
export class LogoutComponent implements OnInit {
    ngOnInit() {
        window.localStorage.removeItem('TOKEN');
        setTimeout(() => this.router.navigate(['/login']),2000)
    }

    constructor(private router: Router) {}
}