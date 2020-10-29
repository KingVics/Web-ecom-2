import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUSER } from "./user.model"

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http:HttpClient) { }
 

  public loginUserfromRemote(user: IUSER):Observable<any> {
    let options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.post<any>("https://cors-anywhere.herokuapp.com/https://sopaua.herokuapp.com/api/v1/login", user, options)
  }

  public AdminUserfromRemote(user: IUSER):Observable<any> {
    let options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.post<any>("https://cors-anywhere.herokuapp.com/https://sopaua.herokuapp.com/api/v1/login", user, options)
  }


  public registerUserfromRemote(user: IUSER):Observable<any> {
    let options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.post<any>("https://cors-anywhere.herokuapp.com/https://sopaua.herokuapp.com/api/v1/users", user, options)
  }

}
 