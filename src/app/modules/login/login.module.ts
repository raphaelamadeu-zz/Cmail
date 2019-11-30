import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import { SharedComponentModule } from 'src/app/components/shared-components.module';
import { LoginRoutingModule } from './login-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        SharedComponentModule,
        LoginRoutingModule,
        HttpClientModule,
        FormsModule 
    ],
    providers: [
        LoginService
    ]
})
export class LoginModule {}