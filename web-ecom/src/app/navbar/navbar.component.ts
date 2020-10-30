import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../user/auth.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  

  constructor(public auth:AuthService) {

   }

  

}
