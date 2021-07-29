import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Signup } from './signup.model';
import { kMaxLength } from 'buffer';



@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  // public readonly baseUrl ='http://localhost/60349/api/Signup'; 
  public readonly baseUrl = 'http://localhost:5000/api/Signup' //https://localhost:44305/api/Signup'; 
  formData: Signup = new Signup(); 

  SignUpUser()
  {
    return this.http.post(this.baseUrl, this.formData);
  }
}


