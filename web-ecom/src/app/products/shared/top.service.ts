import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopService {

  constructor() { }
  getTopCollections(){
    return TOPCOLLECTIONS
  }

  // getTop(cd:number) {
  //   return TOPCOLLECTIONS.find(top => top.cd === cd)
  // }
}


let TOPCOLLECTIONS = [{
  cd: 7,
  productName: "2020 Air Sneakers",
  productOrders: "",
  productReviews: "",
  description: "",
  price: 15000,
  starRating: 4.5,
  imageUrl: "../../../assets/topCollections/7.png"
},
{
  id: 8,
  productName: "BeatsbyDre Headphone",
  productOrders: "",
  productReviews: "",
  description: "",
  price: 5000,
  starRating: 4.0,
  imageUrl: "../../../assets/topCollections/8.png"
},
{
  id: 9,
  productName: "Samsung Note 20s",
  productOrders: "",
  productReviews: "",
  description: "",
  price: 108000,
  starRating: 4.7,
  imageUrl: "../../../assets/topCollections/9.png"
},
{
  id: 10,
  productName: "Luxury wrist watch",
  productOrders: "",
  productReviews: "",
  description: "",
  price: 15000,
  starRating: 3.0,
  imageUrl: "../../../assets/topCollections/10.png"
},
{
  id: 12,
  productName: "Women trendy shoes",
  productOrders: "",
  productReviews: "",
  description: "",
  price: 15000,
  starRating: 4.5,
  imageUrl: "../../../assets/topCollections/12.png"
},
{
  id: 13,
  productName: "Air pod pro",
  productOrders: "",
  productReviews: "",
  description: "",
  price: 15000,
  starRating: 4.8,
  imageUrl: "../../../assets/topCollections/13.png"
}
]