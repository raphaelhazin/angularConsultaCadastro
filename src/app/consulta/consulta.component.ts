import { Component, OnInit } from '@angular/core';
import { Consulta } from './consulta';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  public consulta : Consulta;
  constructor() {
    this.consulta = new Consulta();
   }

  ngOnInit(): void {
  }

  consultaDados () {
    this.consulta.consultar();
  }

}
