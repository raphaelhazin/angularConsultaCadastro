import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { ConsultaComponent } from './consulta.component';

const routes: Routes =[
    {path: '', component:ConsultaComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports : [
    RouterModule
  ]
})
export class ConsultaRoutingModule { }
