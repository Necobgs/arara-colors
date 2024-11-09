import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from '../models/interfaces/auth';
import { Product } from '../models/interfaces/product';
import { ProductDto } from '../models/product.dto';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  private apiUrl = environment.apiUrl

  getOne(product_id:number){
    // const headers = new HttpHeaders();
    // let authData: Auth | null | string = null;
    // if(typeof(localStorage) !== 'undefined'){
    //   authData = localStorage.getItem('authData')
    // }
    // if(authData){
    //   authData = JSON.parse(authData) as Auth
    //   headers.set('Authorization',`Bearer ${authData.token}`)
    // }
    return this.http.get<Product>(`${this.apiUrl}/products/${product_id}`)
  }

  getAll(filters:ProductDto){
    const headers = new HttpHeaders();
    // let authData: Auth | null | string = null;
    // if(typeof(localStorage) !== 'undefined'){
    //   authData = localStorage.getItem('authData')
    // }
    // if(authData){
    //   authData = JSON.parse(authData) as Auth
    //   headers.set('Authorization',`Bearer ${authData.token}`)
    // }
    let paramsArray: string[] = [];
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== null) { // Para evitar parâmetros vazios
        const encodedKey = encodeURIComponent(key);
        const encodedValue = encodeURIComponent(String(value));
        paramsArray.push(`${encodedKey}=${encodedValue}`);
      }
    });

    const params = paramsArray.join('&');
    const url = `${this.apiUrl}/products?${params}`;
    return this.http.get<Product[]>(url);
  }
}
