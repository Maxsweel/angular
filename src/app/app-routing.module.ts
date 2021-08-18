import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Area de rotas da aplicação inteira
const routes: Routes =
[

  {
  path:'', // sem rotas leva pra home
  pathMatch:'full',//caso usuario deixe espaço o angular trata
  redirectTo:'home',
  },

  //tratando rota home
  {
  path:'home',
  loadChildren:() => import('./home/home.module').then((m) => m.HomeModule),
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
