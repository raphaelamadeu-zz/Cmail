import { Component } from '@angular/core';
import { PageDataService } from 'src/app/services/page.service';
import { HeaderDataService } from 'src/app/services/header.service';

@Component({
    selector: 'cmail-header',
    templateUrl: './header.component.html',
    styleUrls: [
        './header.component.css',
        './header-search.css'
    ]
})
export default class HeaderComponent {
    private _isMenuOpen: boolean = false

    tituloDaPagina = 'Cmail'
    handleBuscaChanges({target}) {
        this.headerService.atualizarTermoDeFiltro(target.value)
    }

    get isMenuOpen() {
        return this._isMenuOpen
    }

    toggleMenu() {
        this._isMenuOpen = !this._isMenuOpen
    }

    
    public get loggedIn() : string {
        return localStorage.getItem('TOKEN')
    }

    constructor(private pageService: PageDataService, private headerService: HeaderDataService) {
        this.pageService.titulo.subscribe(novoTitulo => this.tituloDaPagina = novoTitulo)
    }
    
}