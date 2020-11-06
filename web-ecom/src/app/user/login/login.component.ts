import { Component, OnInit } from '@angular/core'
import { Router } from "@angular/router"
import {HttpClient} from "@angular/common/http"
import {RegistrationService} from "../registration.service"
import { IUSER } from '../user.model'
import { AuthService } from "../auth.service"
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    user = new IUSER();
    msg ="";
    errorMessage: string;
    isLoading = false; 

    constructor(private service:RegistrationService, private router:Router, private http:HttpClient, private auth:AuthService) {}

    ngOnInit() {

    }

    loginUser(loginForm: NgForm) {
      if(loginForm && loginForm.valid) {
        const email = loginForm.form.value.email;
        const password = loginForm.form.value.password;
      }
      else {
        this.errorMessage = 'Please enter email and password.';
      }
        
    }
    
    toggleLoading() {
      this.isLoading = true;
      this.auth.login()
      this.service.AdminUserfromRemote(this.user).subscribe(
          data => {
              console.log("response received");
              this.router.navigate(['/products'])
          },
          error => {
              console.log("expection occured");
              this.msg="Please enter a valid credentials"
          }
      )
        setTimeout(() => {
          this.isLoading = false;
        }, 10000)
    }
}