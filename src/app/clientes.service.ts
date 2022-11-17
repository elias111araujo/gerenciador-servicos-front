import { Injectable } from '@angular/core';
import { Cliente } from './clientes/cliente';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http : HttpClient) { 


  }

  salvar(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>('https://elias-gerenciador-servicos-api.herokuapp.com/api/clientes', cliente);
    
  }

  atualizar(cliente: Cliente): Observable<any>{
    return this.http.put<Cliente>(`https://elias-gerenciador-servicos-api.herokuapp.com/api/clientes/${cliente.id}`, cliente);
    
  }

  getClientes() : Observable<Cliente[]> {
    return this.http.get<Cliente[]>('https://elias-gerenciador-servicos-api.herokuapp.com/api/clientes');
    
  }
  
  getClienteById(id : number): Observable<Cliente>{
    return this.http.get<any>(`https://elias-gerenciador-servicos-api.herokuapp.com/clientes/${id}`);
  }

  deletar(cliente: Cliente): Observable<any>{
    return this.http.delete<any>(`https://elias-gerenciador-servicos-api.herokuapp.com/api/clientes/${cliente.id}`);
    
  }
  
}
