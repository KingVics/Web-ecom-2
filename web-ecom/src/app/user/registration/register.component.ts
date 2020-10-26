import { Component } from '@angular/core'
import { HttpClient } from "@angular/common/http"
import { NgForm } from "@angular/forms"
import {RegistrationService} from "../registration.service"
import { IUSER } from '../user.model'
import { AuthService } from "../auth.service"
import { Router } from "@angular/router"

@Component({
    selector: "register-app",
    templateUrl: './register.component.html',
    styleUrls: ['../login/login.component.css', './registration.component.css']
})

export class RegistrationComponent {
    user = new IUSER();
    msg ="";

    constructor(private http:HttpClient, private service:RegistrationService, private router:Router) {}
    registerUser() {
      this.service.registerUserfromRemote(this.user).subscribe(
          data => {
            console.log("response received");
            this.msg ="Registration successfull"
            this.router.navigate(['user/login'])
        },
        error => {
          console.log("expection occured");
        }
      )
    }

}

