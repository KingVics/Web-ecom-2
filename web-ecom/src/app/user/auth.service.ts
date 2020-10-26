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
      id: "1",
      firstname: 'Victor',
      lastname: 'Papaya',
      password:"hhhhhhh",
      email:"jjjjjjjj",
      phone: 9999999999999,

    }
}

isLoggedIn() {
    return !!this.currentUser;
}

}
