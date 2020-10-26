import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Useri } from './useri';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
currentUser:Useri

 currentUserSubject: BehaviorSubject<Useri>
  constructor() { }
  login(email:string, password: string) {
    this.currentUser = {
        id: 1,
        firstName: 'Victor',
        lastName: 'Papaya',

    }
}

isLoggedIn() {
    return !!this.currentUser;
}

}
