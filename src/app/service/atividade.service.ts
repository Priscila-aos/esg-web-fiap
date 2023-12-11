import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Atividade } from '../model/atividade.model';

@Injectable({
  providedIn: 'root'
})
export class AtividadeService {

  private url = "http://localhost:8080/atividades"

  constructor(private httpClient: HttpClient) { }

  getAtividades() : Observable<Atividade[]> {
    return this.httpClient.get<Atividade[]>(this.url);
  }


  getAtividade(id: number) : Observable<Atividade> {
    return this.httpClient.get<Atividade>(this.url + `/` + id);
  }

  postAtividade(atividade: Atividade) : Observable<Atividade> {
    return this.httpClient.post<Atividade>(this.url, atividade);
  }

  putAtividade(id: number, atividade: Atividade) : Observable<Atividade> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id",id);
    return this.httpClient.put<Atividade>(this.url + `/` + id, atividade);
  }

  deleteAtividade(id: number) : Observable<void> {
    return this.httpClient.delete<void>(this.url + `/` + id);
  }  

}
