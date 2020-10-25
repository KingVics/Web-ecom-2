import { Routes }  from '@angular/router'
import {LoginComponent} from './user/login/login.component'
import { RegistrationComponent } from './user/registration/register.component'
import {AppComponent} from "./app.component"
import { ProductsComponent } from './products/products.component'
import { ErrorComponent } from './error/error.component'


export const appRoutes:Routes = [
    {path:'products',component:ProductsComponent},
    { path: 'login', component:LoginComponent },
    { path: 'signup', component:RegistrationComponent },
    {path:'',redirectTo:'/products',pathMatch:'full'},
    {path:'**',component:ErrorComponent}

]

