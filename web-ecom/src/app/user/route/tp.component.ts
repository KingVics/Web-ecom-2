import { Component, OnInit, Input } from '@angular/core';
import { TopService } from '../shared/top.service';

@Component({
  selector: 'app-top',
  templateUrl: `
  <div class="container-fluid top_collection">
    <h2 class="top__collection_header">Top Collection</h2>
  <div class="row">
      <div class="col-sm-2 col-md-2  " *ngFor="let top of topCollection">
      <div class="product_list_card">
      <div><img src="{{top.imageUrl}}" alt="" srcset=""></div>
        <div class="product_details">
          <div class="product_name">
            <span>{{top.productName}}</span>
          </div>
          <div class="product_price">
            <span>{{top.price}}</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
  `,
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  @Input() top:any;
  topCollection:any[]

  constructor(private topService:TopService) { }

  ngOnInit(): void {
   this.topCollection=this.topService.getTopCollections()
   
  }

 

}
