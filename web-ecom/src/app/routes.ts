import { Routes }  from '@angular/router'
import {AppComponent} from "./app.component"
import { ProductsComponent } from './products/products.component'
import { ErrorComponent } from './error/error.component'


export const appRoutes:Routes = [
    {path:'products',component:ProductsComponent},
    {path:'user',loadChildren:()=> import('./user/user.module').then(m=>m.UserModule)},
    {path:'admin',loadChildren:()=> import('./admin/admin.module').then(m=>m.AdminModule)},

    {path:'',redirectTo:'/products',pathMatch:'full'},
    {path:'**',component:ErrorComponent}

]

