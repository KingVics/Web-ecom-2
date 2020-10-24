import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  template:  `
  
    <div class="row">
        <div class="col-sm-3 col-md-3">
            <div class="product__list_card">
                <div><img src={{data.imageUrl}} /></div>
                <div class="product__details">
                    <div class="product__name">
                        <span>{{data.productName}}</span>
                    </div>
                    <div class="product__price">
                        <span>{{data.price}}</span>
                    </div>
                </div>
            <div>
        </div>
    </div>


  
  `,
  styleUrls: ["../../products/list/product.list.css"]
 
})
export class ProductsListComponent implements OnInit {
    @Input() data:any;

  constructor() { }

  ngOnInit(): void {
    
  }

}

