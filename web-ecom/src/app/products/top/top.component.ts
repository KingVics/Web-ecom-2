import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-top',
  template:  `

    <div>
        <div [routerLink]="['/products', top.id]">
            <div class="product__list_card">
            <div><img src="{{top.imageUrl}}" alt="" srcset=""></div>
               <div class="product_details">
                    <div class="product_name">
                     <span>{{top.productName}}</span>
                    </div>
                <div class="product_price">
                     <span>₦{{top.price}}</span>
              </div>
             </div>
            <div> 
        </div>
    </div>



  `,
  styleUrls: ['./top.component.css', '../list/product.list.css']

})
export class TopComponent implements OnInit {

  @Input() top:any;
  constructor() { }

  ngOnInit(): void {

  }

}

