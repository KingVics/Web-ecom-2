import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-navbar></app-navbar>
    <router-outlet></router-outlet>
    <app-footer></app-footer>

  `,

  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
