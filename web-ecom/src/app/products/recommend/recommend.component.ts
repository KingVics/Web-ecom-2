import { Component, OnInit, Input} from '@angular/core';



@Component({
  selector: 'app-recommend',
  template:  `
  <div [routerLink]="['/products', recommend.id]">
  <div class="product_list_card">
  <div class="recommend_product"><img src="{{recommend.imageUrl}}" alt="" srcset=""></div>
   <div class="product_details">
     <div class="product_name">
       <span>{{recommend.productName}}</span>
     </div>
     <div class="product_price">
       <span>{{recommend.price}}</span>
     </div>
   </div>
 </div>
 <div>
`,
  styleUrls: ['./recommend.component.css', '../top/top.component.css']
})
export class RecommendedComponent implements OnInit {

  @Input() recommend:any;
  constructor() { }

  ngOnInit(): void {

  }

}
