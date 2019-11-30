import { NgModule } from "@angular/core";
import { CaixaDeEntradaComponent } from './caixa-de-entrada.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedComponentModule } from 'src/app/components/shared-components.module';
import { CaixaDeEntradaRoutingModule } from './caixa-de-entrada-routing.module';
import { filtroPorAssunto } from './filtro-por-assunto.pipe';

@NgModule({
    declarations: [
        CaixaDeEntradaComponent,
        filtroPorAssunto
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedComponentModule,
        CaixaDeEntradaRoutingModule
    ]
})
export class CaixaDeEntradaModule {}