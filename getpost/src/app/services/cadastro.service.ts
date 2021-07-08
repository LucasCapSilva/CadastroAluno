import { Estudante } from './../model/Estudante';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http: HttpClient) { }

  getAllEstudantes(): Observable<Estudante[]>{
    return this.http.get<Estudante[]>('http://localhost:8080/estudantes')
  }

  postEstudantes(estudante: Estudante) : Observable<Estudante>{
    return this.http.post<Estudante>('http://localhost:8080/estudantes', estudante)
  }
}
