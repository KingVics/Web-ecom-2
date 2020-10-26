import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopService {

  constructor() { }
  getTopCollections(){
    return TOPCOLLECTIONS
  }
}


let TOPCOLLECTIONS = [{
  productId: 7,
  productName: "2020 Air Sneakers",
  productOrders: "",
  productReviews: "",
  description: "",
  price: 15000,
  starRating: 4.5,
  imageUrl: "../../../assets/topCollections/7.png"
},
{
  productId: 8,
  productName: "BeatsbyDre Headphone",
  productOrders: "",
  productReviews: "",
  description: "",
  price: 5000,
  starRating: 4.0,
  imageUrl: "../../../assets/topCollections/8.png"
},
{
  productId: 9,
  productName: "Samsung Note 20s",
  productOrders: "",
  productReviews: "",
  description: "",
  price: 108000,
  starRating: 4.7,
  imageUrl: "../../../assets/topCollections/9.png"
},
{
  productId: 10,
  productName: "Luxury wrist watch",
  productOrders: "",
  productReviews: "",
  description: "",
  price: 15000,
  starRating: 3.0,
  imageUrl: "../../../assets/topCollections/10.png"
},
{
  productId: 12,
  productName: "Women trendy shoes",
  productOrders: "",
  productReviews: "",
  description: "",
  price: 15000,
  starRating: 4.5,
  imageUrl: "../../../assets/topCollections/12.png"
},
{
  productId: 13,
  productName: "Air pod pro",
  productOrders: "",
  productReviews: "",
  description: "",
  price: 15000,
  starRating: 4.8,
  imageUrl: "../../../assets/topCollections/13.png"
}
]
