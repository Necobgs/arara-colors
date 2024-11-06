import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { environment } from '../../environments/environment';
=======
import { environment } from '../../environments/environment.prod';
>>>>>>> 6a22ae92f282322c8e19d8cfabd860dccb1580fb
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