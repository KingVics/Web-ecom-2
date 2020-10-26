import { Component, OnInit } from '@angular/core'
import { Router } from "@angular/router"
import {HttpClient} from "@angular/common/http"
import {RegistrationService} from "../registration.service"
import { IUSER } from '../user.model'
import { AuthService } from "../auth.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    email
    password
    mouseoverLogin  
    user = new IUSER();
    msg ="";


    constructor(private service:RegistrationService, private router:Router, private http:HttpClient, private auth:AuthService) {}

    ngOnInit() {

    }

    loginUser() {
        this.auth.login()
        this.service.loginUserfromRemote(this.user).subscribe(
            data => {
                console.log("response received");
                this.router.navigate(['/products'])
            },
            error => {
                console.log("expection occured");
                this.msg="Please enter a valid credentials"
            }
        )
    }
}
