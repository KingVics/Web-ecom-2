import { Component } from '@angular/core'
import { AuthService } from "../authService"
import { Router } from "@angular/router"

@Component ({
    selector: 'login-app',
    templateUrl: './login.component.html',
    styleUrls: ["./login.component.css"]
})

export class LoginComponent { 
    email
    password

    constructor(private authService:AuthService, private router:Router) {}

    login(formValues) {
        this.authService.login(formValues.email, formValues.password)
        this.router.navigate(['products'])
    }
}