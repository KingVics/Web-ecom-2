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
  id: 7,
  productName: "MacBook Pro",
  productOrders: "40000 | ",
  productReviews: "20000 |",
  description: "Sleek and durability in the new Macbook design",
  price: 255000,
  starRating: 4.5,
  imageUrl: "../../../assets/topCollections/7.png"
},
{
  id: 8,
  productName: "Play Station 5",
  productOrders: "100 | ",
  productReviews: "50 |",
  description: "The new PS5 takes gaming world to a new level",
  price: 56000,
  starRating: 4.0,
  imageUrl: "../../../assets/topCollections/8.png"
},
{
  id: 9,
  productName: "Play Station 4 ",
  productOrders: "34000 | ",
  productReviews: "1000 |",
  description: "Join the adventure with great gaming experience",
  price: 108000,
  starRating: 4.7,
  imageUrl: "../../../assets/topCollections/9.png"
},
{
  id: 10,
  productName: "Navy Polo Men",
  productOrders: "6000 | ",
  productReviews: "400 |",
  description: "Easy and comfy",
  price: 5000,
  starRating: 3.0,
  imageUrl: "../../../assets/topCollections/10.png"
},
{
  id: 12,
  productName: "Engagement Ring",
  productOrders: "200 | ",
  productReviews: "3 | ",
  description: "",
  price: 25000,
  starRating: 4.5,
  imageUrl: "../../../assets/topCollections/12.png"
},
{
  id: 13,
  productName: "Toaster",
  productOrders: "250 | ",
  productReviews: "10 |",
  description: "",
  price: 4000,
  starRating: 4.8,
  imageUrl: "../../../assets/topCollections/13.png"
}
]