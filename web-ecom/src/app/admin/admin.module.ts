import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteModule } from './route/route.module';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { EditproductComponent } from './editproduct/editproduct.component';



@NgModule({
  declarations: [EditproductComponent , ProductsComponent, LoginComponent],
  imports: [
    CommonModule,
    RouteModule,
    FormsModule
  ]
})
export class AdminModule { }
