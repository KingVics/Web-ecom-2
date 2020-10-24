import { Component, OnInit } from '@angular/core';
import {ProductService} from "./shared/product.service"

@Component({
  selector: 'app-products',
  template:  `<div>
  <app-carousel></app-carousel>
  <div class="container">
      <div *ngFor="let product_entry of products">
        <app-list [data]="product_entry"></app-list>
      </div> 
   
  </div>
      
    
  <div>`,
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any[]

  constructor(private productservice: ProductService) {

   }

  ngOnInit(): void {
   this.products = this.productservice.getProduct()
  }

}
