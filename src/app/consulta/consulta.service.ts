import { Injectable } from '@angular/core';
import { Consulta } from './consulta';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  constructor() { }

  public getConsulta(): Consulta {
    let consulta = new Consulta();
    return consulta;
  }
}
