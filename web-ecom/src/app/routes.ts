import { Routes }  from '@angular/router'
import {LoginComponent} from './login/login.component'
import { RegistrationComponent } from './registration/register.component'
import {AppComponent} from "./app.component"

export const appRoutes:Routes = [
    { path: 'login', component:LoginComponent },
    { path: 'signup', component:RegistrationComponent },
    

]

