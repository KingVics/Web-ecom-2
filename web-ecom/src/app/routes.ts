import { Routes }  from '@angular/router'
import { ProductsComponent } from './products/products.component'
import { ErrorComponent } from './error/error.component'
import {ProductDetailsComponent} from "./products/product-details/product-details.component"
import {ProductRouterActivate} from "./products/product-details/product-router.activate.service"



export const appRoutes:Routes = [
   
    {path:'products',component:ProductsComponent},
    {path:'user',loadChildren:()=> import('./user/user.module').then(m=>m.UserModule)},
    {path:'admin',loadChildren:()=> import('./admin/admin.module').then(m=>m.AdminModule)},
    { path: 'products/:id', component:ProductDetailsComponent,  canActivate: [ProductRouterActivate]},
    {path:'',redirectTo:'/products',pathMatch:'full'},
    {path:'**',component:ErrorComponent},
    
]

