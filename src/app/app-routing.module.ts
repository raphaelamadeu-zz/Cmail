import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Rotas } from './app.routes';
import { AuthGuard } from './guards/auth.guards';



@NgModule({
    imports: [
        RouterModule.forRoot(Rotas)
    ],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class AppRoutingModule {}