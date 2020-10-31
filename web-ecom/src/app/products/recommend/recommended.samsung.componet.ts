import { Component, OnInit, Input} from '@angular/core';



@Component({
  selector: 'app-samsung',
  template:  `
  <div class="product_list_card" [routerLink]="['/products', samsung.id]">
     <div class="recommend_product"><img src="{{samsung.imageUrl}}" alt="" srcset=""></div>
      <div class="product_details">
        <div class="product_name">
          <span>{{samsung.productName}}</span>
        </div>
        <div class="product_price">
          <span>₦{{samsung.price}}</span>
        </div>
      </div>
  </div>
`,
  styleUrls: ['./recommend.component.css', '../top/top.component.css']
})
export class SamsungRecommendedComponent implements OnInit {

  @Input() samsung:any;
  constructor() { }

  ngOnInit(): void {

  }

}