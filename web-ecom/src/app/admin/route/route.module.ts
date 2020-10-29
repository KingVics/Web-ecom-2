import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EditproductComponent } from '../editproduct/editproduct.component';
import { ProductsComponent } from '../products/products.component';
import { LoginComponent } from '../login/login.component';

const routes:Routes=[
  {path:'products',component:ProductsComponent},
  {path:'edit',component:EditproductComponent},
  {path:'login',component:LoginComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

  ],
  exports:[
    RouterModule

  ]
})
export class RouteModule { }
