import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router"
import { Injectable } from "@angular/core"
import {ProductService} from "../shared/product.service"
import {TopService}  from "../shared/top.service"
import {AllProductService} from "../shared/dist/all.product.service"


@Injectable() 
export class ProductRouterActivate implements CanActivate {
    constructor(private eventservice: AllProductService,  private router:Router) {}

    canActivate(route:ActivatedRouteSnapshot) {
       const eventExist = !!this.eventservice.getProducts(+route.params['id'])
     

       if(!eventExist) {
           this.router.navigate(['**'])
       }
       else {
        return eventExist
       }

       
       
       
    }
}