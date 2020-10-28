import { Component, OnInit } from '@angular/core';
import { RecommendedProduct } from '../shared/recommended.service';


@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.css', '../top/top.component.css']
})
export class RecommendedComponent implements OnInit {
recomProduct:any[]
  constructor(private recomservice:RecommendedProduct) { }

  ngOnInit(): void {
   this.recomProduct=this.recomservice.getRecomProducts()
  }

}

