import { Injectable } from '@angular/core';
import { Consulta } from './consulta';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:8080/profissional/consultaTodos"

  public getIntance(): Consulta {
    return new Consulta();
  }

  public getConsulta(): Observable<Consulta> {
    return this.http.get<Consulta>(this.url);
    // let consulta = new Consulta();
    // return consulta;
  }
}
