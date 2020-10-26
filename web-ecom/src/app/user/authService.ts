import {Injectable} from "@angular/core"
import {IUSER} from "./user.model"

@Injectable()

export class AuthService {
    currentUser:IUSER
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