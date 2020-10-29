import { Component, OnInit } from '@angular/core';
import {RegistrationService} from "../../user/registration.service"
import {HttpClient} from "@angular/common/http"
import { IUSER } from '../../user/user.model'
import { AuthService } from "../../user/auth.service"
import { Router } from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new IUSER();
  msg ="";

  
  constructor(private service:RegistrationService, private router:Router, private http:HttpClient, private auth:AuthService) {}

  ngOnInit() {

  }

  adminUser() {
      this.auth.login()
      this.service.AdminUserfromRemote(this.user).subscribe(
          data => {
              console.log("response received");
              this.router.navigate(['admin/products'])
          },
          error => {
              console.log("expection occured");
              this.msg="Please enter a valid credentials"
          }
      )
  
}

} 