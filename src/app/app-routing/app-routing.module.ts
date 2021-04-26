import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';

const routes: Routes =[
    {path: 'consulta', loadChildren: () => import('../consulta/consulta.module').then(m => m.ConsultaModule)},
     {path: 'home', loadChildren: () => import('../home/home.module').then(m => m.HomeModule)},
     {path: '', pathMatch:'full', redirectTo: '/home'}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {useHash:true})
  ],
  exports : [
    RouterModule
  ]
})
export class AppRoutingModule { }
