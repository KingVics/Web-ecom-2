import { Component, OnInit } from '@angular/core'
import { ProductService } from "../shared/product.service"
import { TopService } from "../shared/top.service"

import { ActivatedRoute } from "@angular/router"


@Component({
    templateUrl: "./product-details.component.html",
    styleUrls: ['./product-details.component.css']

})

export class ProductDetailsComponent  implements OnInit{
    product:any
    constructor(private eventService:ProductService, private topservice:TopService, private route: ActivatedRoute) {

    }


    ngOnInit(): void {
        this.product = this.eventService.getProducts(+this.route.snapshot.params['id']);
    }
     
}
