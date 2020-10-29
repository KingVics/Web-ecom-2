import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../user/auth.service';
import { Useri } from '../user/useri';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {
  constructor(public auth:AuthService) {

   }

 

}
