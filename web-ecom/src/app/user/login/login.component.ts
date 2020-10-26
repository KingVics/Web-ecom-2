import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email
password
mouseoverLogin
  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  login(formValues){
    this.auth.login(formValues.email,formValues.password)
    this.router.navigate(['/products'])
  }

}
