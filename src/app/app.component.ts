import { Component, OnInit } from '@angular/core';
import { App } from './app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angularConsultaCadastro';

  app: App = new App();
  ngOnInit(): void {
    
  }
  consultar() {
    console.log(this.app.nome);
    console.log(this.app.sobrenome);
    console.log(this.app.cpf);
  }

}
