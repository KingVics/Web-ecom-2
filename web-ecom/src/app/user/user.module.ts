import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { RouteModule } from './route/route.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoginComponent, RegistrationComponent],
  imports: [
    CommonModule,
    RouteModule,
    FormsModule
  ]
})
export class UserModule { }
