import { Component, OnInit } from '@angular/core';
import {ProductService} from "./shared/product.service"

@Component({
  selector: 'app-products',
  template:  `<div>
  <app-carousel></app-carousel>
    <div class="container-fluid product_container">
      <div class="row">
        <div class="col-sm-2 col-md-2" *ngFor="let product_entry of products">
          <app-list [data]="product_entry"></app-list>
        </div>
      </div>
    </div>
    <div class="container-fluid product_container">
      <div class="row">
        <div class="col-sm-3 col-md-3">
          <div class="product__banner">
              <div class="product__banner_items">
                <div class="product__banner_img">
                 <img src="../../assets/banners/star.svg" alt="" />
                </div>
                <div class="product__banner_header">
                  <h2>Top Notch Items</h2>
                </div>
              </div>
          </div>
        </div>
        <div class="col-sm-3 col-md-3">
          <div class="product__banner">
              <div class="product__banner_items">
                <div class="product__banner_img">
                 <img src="../../assets/banners/delivery.svg" alt="" />
                </div>
                <div class="product__banner_header">
                  <h2>Fee Delivery</h2>
                </div>
              </div>
          </div>
        </div>
        <div class="col-sm-3 col-md-3">
          <div class="product__banner">
              <div class="product__banner_items">
                <div class="product__banner_img">
                 <img src="../../assets/banners/secure.svg" alt="" />
                </div>
                <div class="product__banner_header">
                  <h2>Secure Payment</h2>
                </div>
              </div>
          </div>
        </div>
        <div class="col-sm-3 col-md-3">
          <div class="product__banner">
              <div class="product__banner_items">
                <div class="product__banner_img">
                 <img src="../../assets/banners/time.svg" alt="" />
                </div>
                <div class="product__banner_header">
                  <h2>On Time Delivery</h2>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div class="product__banner_advert product_container">
    <div class="row">
    <div class="col-sm-12 col-md-12">
      <img src="../../assets/banners/amelia.png" />
      <h2 class="product__banner_advert_content">All you need in one place!</h2>
    </div>
  </div>
    </div>

    <app-top></app-top>


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
