import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Auth } from '../models/interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  private apiUrl = environment.apiUrl

  getOne(product_id:number){
    const headers = new HttpHeaders();
    let authData: Auth | null | string
    authData = localStorage.getItem('authData')
    if(authData){
      authData = JSON.parse(authData) as Auth
      headers.set('Authorization',`Bearer ${authData.token}`)
    }
    return this.http.get(`${this.apiUrl}/products/${product_id}`)
  }

  getAll(qty_per_page:number,page:number){
    const headers = new HttpHeaders();
    let authData: Auth | null | string
    authData = localStorage.getItem('authData')
    if(authData){
      authData = JSON.parse(authData) as Auth
      headers.set('Authorization',`Bearer ${authData.token}`)
    }
    return this.http.get(`${this.apiUrl}/products?page=${page}&qty_per_page=${qty_per_page}`)
  }
}
