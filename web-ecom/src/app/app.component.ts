import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-navbar></app-navbar>
    <router-outlet></router-outlet>
    <app-carousel></app-carousel>
    <app-footer></app-footer>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
