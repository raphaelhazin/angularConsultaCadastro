import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {InputTextModule} from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {FormsModule} from '@angular/forms';
import { ConsultaComponent } from './consulta/consulta.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'



@NgModule({
  declarations: [
    AppComponent,
    ConsultaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    RouterModule.forRoot([
      {path: 'consulta', component: ConsultaComponent},
      {path: 'home', component: HomeComponent},
      {path: '', pathMatch:'full', redirectTo: '/home'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
