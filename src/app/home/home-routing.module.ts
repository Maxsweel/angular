import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';

//rotas do modulo home
const routes: Routes =
[
  {
    path:'',
    component: HomeComponent,

    children: //subrota em home
    [
      {
        path:'', //por padrão iremos sempre carregar o login
        component: LoginComponent,
      }
    ]

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
