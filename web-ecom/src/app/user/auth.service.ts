import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUSER } from './user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
currentUser:IUSER

 currentUserSubject: BehaviorSubject<IUSER>
  constructor() { }
  login() {
    this.currentUser = {
      firstname: '',
      lastname: '',
      password:"",
      confirmPassword: '',
      email:"",
      phone: null

    }
}

isLoggedIn() {
    return !!this.currentUser;
}

}
