import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { MenuComponent } from './menu.component';

const routes: Routes =[
    {path: '', component:MenuComponent}
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
export class MenuRoutingModule { }
