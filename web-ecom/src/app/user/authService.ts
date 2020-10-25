import {Injectable} from "@angular/core"
import {IUSER} from "./user.model"

@Injectable()

export class AuthService {
    currentUser:IUSER
    login(email:string, password: string) {
        this.currentUser = {
            id: 1,
            firstName: 'Victor',
            lastName: 'Papaya'
        }
    }

    isLoggedIn() {
        return !!this.currentUser;
    }
}