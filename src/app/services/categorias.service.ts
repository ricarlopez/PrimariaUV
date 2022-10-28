import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria.model';


@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

   
    private url = environment.apiUrl;

  constructor(private http:HttpClient) { }

  get(): Observable<Categoria[]>{
    //return this.http.get<Categoria[]>(`${this.url}categorias`)
    return this.http.get<Categoria[]>(this.url+'categorias');
  }
  save(categoria:Categoria):Observable<any>{
    return this.http.post(`${this.url}categorias`,categoria);
    //return this.http.post(this.url+'categorias',categoria);
  }
  
  getById(id:number):Observable<Categoria>{
    return this.http.get<Categoria>(`${this.url}categorias/${id}`);
  }
  update(id:number,categoria:Categoria){
    return this.http.put(`${this.url}categorias/${id}`,categoria);
    
  }

  delete(id:number){
    return this.http.delete(`${this.url}categorias/${id}`);
  }
}