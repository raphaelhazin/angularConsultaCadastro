import { Component, OnInit } from '@angular/core';
import { Consulta } from './consulta';
import { ConsultaService } from './consulta.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  public consulta : Consulta;
  constructor(private consultaService : ConsultaService) {
    
   }

  ngOnInit() {
    this.consulta = this.consultaService.getIntance(); 
  }

  consultaDados () {
    // this.consulta.consultar();
    this.consultaService.getConsulta().subscribe(
        resultado => console.log(resultado));
      }
}
