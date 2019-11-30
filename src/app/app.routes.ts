import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guards';

import { LogoutComponent } from './components/logout/logout.component'

export const Rotas: Routes = [
    {
      path: 'cadastro',
      loadChildren: () => import('./modules/cadastro/cadastro.module').then(m => m.CadastroModule)
    },
    {
      path: 'login',
      loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
    },
    {
      path: 'inbox',
      loadChildren: () => import('./modules/caixa-de-entrada/caixa-de-entrada.module').then(m => m.CaixaDeEntradaModule),
      canActivate: [AuthGuard]
    },
    {
      path: 'logout',
      component: LogoutComponent
    },
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'inbox'
    },
    {
      path: '**',
      redirectTo: '',
      pathMatch: 'full'
    }
  ]