import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditproductComponent } from './editproduct/editproduct.component';
import { RouteModule } from './route/route.module';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [ EditproductComponent, ProductsComponent, LoginComponent],
  imports: [
    CommonModule,
    RouteModule
  ]
})
export class AdminModule { }
