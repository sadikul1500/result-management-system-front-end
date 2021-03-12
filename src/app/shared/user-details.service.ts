import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import { UserDetails } from './user-details.model';

@Injectable({
  providedIn: 'root'
})

export class UserDetailsService {

  constructor(private http: HttpClient) { }

  readonly baseUrl = 'https://localhost:44305/api/User';
  formData: UserDetails = new UserDetails();
  results: UserDetails[];

  postUserDetails()
  {
    
    return this.http.post(this.baseUrl, this.formData);
  }

  putUserDetails()
  {
    return this.http.put(`${this.baseUrl}/${this.formData.id}`, this.formData);
  }

  /*
  logInUser()
  {
    const params = new HttpParams().set("password", this.formData.password);
    return this.http.get(this.baseUrl + "/" + this.formData.roll, {params});
  }
  */

  //this.http.get(this.baseUrl + "users/" + thus.formData.userId, {this.formData})
  //`${this.baseUrl}/${this.formData.roll}`, "12"

  deleteUserDetails(id: number)
  {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  refreshList()
  {
    this.http.get(this.baseUrl).toPromise()
    .then(res=>this.results = res as UserDetails[])
  }
}
