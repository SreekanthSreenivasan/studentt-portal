import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';

import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  // { path: 'home', component: HomePageComponent, canActivate: [AuthGuard] },
  {
    path: 'home',
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule),
    canActivate: [AuthGuard],
  },
  // { path: '**', component: LoginPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
