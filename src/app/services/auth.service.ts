import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Signin } from '../models/signin.model';
import { Auth } from '../models/interfaces/auth';
import { Signup } from '../models/signup.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private apiUrl = environment.apiUrl

  constructor(private http:HttpClient) { }

  signin(signinDto:Signin){
    return this.http.post<Auth>(`${this.apiUrl}/auth/signin`,signinDto)
  }

  singup(singupDto:Signup){
    return this.http.post<Auth>(`${this.apiUrl}/auth/signup`,singupDto);
  }
}
