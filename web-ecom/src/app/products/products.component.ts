import { Component, OnInit, Input } from '@angular/core';
import {ProductService} from "./shared/product.service"
import {TopService} from "../products/shared/top.service"
import { RecommendedProduct } from '../products/shared/recommended.service';
import {SamsungProduct} from "./shared/samsung.service"



@Component({
  selector: 'app-products',
  template:  `
  <div>
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
    <div class="product__banner_advert product_banner_container">
    <div class="row">
    <div class="col-sm-12 col-md-12">
      <img src="../../assets/banners/amelia.png" />
      <h2 class="product__banner_advert_content">All you need in one place!</h2>
    </div>
  </div>
  </div>
  <div class="container-fluid top_collection">
     <h2 class="top__collection_header">Top Collection</h2>
      <div class="row">
        <div class="col-sm-2 col-md-2" *ngFor="let top of topCollection">
          <app-top [top]="top"></app-top>
        </div>
      </div>
  </div>
  <div class="container-fluid recommend_collection">
    <h2 class="top__collection_header">Recommended Products</h2>
      <div class="row">
        <div class="col-sm-2 col-md-2" *ngFor="let recommended of recomProduct">
          <app-recommend [recommend]="recommended"></app-recommend>
        </div>
        <div class="product__banner_advert product_banner_container">
          <div class="row">
          <div class="col-sm-12 col-md-12 product__product_image">
            <img src="../../../assets/banners/samsung.png"/>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-2 col-md-2" *ngFor="let samOfficial of official">
          <app-samsung [samsung]="samOfficial"></app-samsung>
      </div>
    </div>
</div>
    
       

  <div>
  
  `,
  styleUrls: ['./products.component.css', './top/top.component.css', './recommend/recommend.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() recommend:any;
  products: any[]
  topCollection:any[]
  recomProduct:any[]
  official:any[]

  constructor(private productservice: ProductService, private topservice:TopService, private recomservice: RecommendedProduct, private samservice:SamsungProduct) {

   }

  ngOnInit(): void {
   this.products = this.productservice.getProduct()
   this.topCollection = this.topservice.getTopCollections()
   this.recomProduct=this.recomservice.getRecomProducts()
   this.official =  this.samservice.samRecomProducts()
   
  }

}
