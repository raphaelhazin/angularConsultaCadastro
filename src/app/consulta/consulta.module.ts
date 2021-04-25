import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaComponent } from './consulta.component';
import { ConsultaRoutingModule } from './consulta.routing.module';
import { FormsModule }   from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [ConsultaComponent],
  imports: [
    CommonModule,
    ConsultaRoutingModule,
    FormsModule,
    InputTextModule,
    ButtonModule
  ]
})
export class ConsultaModule { }
