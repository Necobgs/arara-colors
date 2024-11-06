import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Category } from '../models/interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient
  ) {}

  private apiUrl:string = environment.apiUrl;

  getAll(){
    return this.http.get<Category[]>(`${this.apiUrl}/categories`)
  }

}
  