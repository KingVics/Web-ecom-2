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
    isLoading = false;
    constructor(private http:HttpClient, private service:RegistrationService, private router:Router) {}
    onSubmit() {
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.user);
    
    }

    toggleLoading() {
      this.isLoading = true;
      this.service.registerUserfromRemote(this.user).subscribe(
        data => {
          console.log("response received");
          this.msg ="Registration successfull"
          this.router.navigate(['user/login'])
      },
      error => {
        console.log("expection occured");
        this.msg="Please enter a valid credentials";
      }
     )
      setTimeout(() => {
        this.isLoading = false;
      }, 11000)
    }
  
  
  }

