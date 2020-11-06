import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SamsungProduct {

  constructor() { }
  samRecomProducts(){
    return RECOMMENDED
  }

//   getProducts(id:number) {
//     return RECOMMENDED.find(product_entry => product_entry.id === id)
//   }
}

let RECOMMENDED = [{
  id: 6,
  productName: "Air podpro",
  productOrders: "1500 Orders |",
  productReviews: "500 Reviews",
  description: "AirPod pro will forever change the way you use headphones.",
  price: 65000,
  starRating: 4.8,
  imageUrl: "../../../assets/products/6.png"
},
{
  id: 5,
  productName: "Women trendy shoes",
  productOrders: "440 Orders | ",
  productReviews: "400 Reviews |",
  description: "Trend with the lastest shoe to meet your dresses needs.",
  price: 75000,
  starRating: 4.5,
  imageUrl: "../../../assets/products/5.png"
},
{
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
  id: 15,
  productName: "Gold Braclet",
  productOrders: "1900 | ",
  productReviews: "76 | ",
  description: "",
  price: 5000,
  starRating: 4.0,
  imageUrl: "../../../assets/recommededCollections/15.png"
},
{
  id: 22,
  productName: "Corporate Men Shoe",
  productOrders: "4500 | ",
  productReviews: "200 | ",
  description: "Fitted corporate shoe for office wear or casual outings",
  price: 8000,
  starRating: 4.7,
  imageUrl: "../../../assets/recommededCollections/22.png"
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
  id: 4,
  productName: "SAMSUNG Galaxy Note S8",
  productOrders: "14523 Orders |  ",
  productReviews: "524 Reviews | ",
  description: "The Galaxy Note 8 is a terrific phone in 2018, with dual cameras and a boatload of stylus tricks.",
  price: 108000,
  starRating: 4.7,
  imageUrl: "../../../assets/products/4.png"
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
  id: 3,
  productName: "BeatsbyDre Headphone",
  productOrders: "2500 Orders | ",
  productReviews: "1500 Reviews | ",
  description: "he good The Beats by Dr. Dre Pill is a portable Bluetooth speaker with striking design, good sound and volume for its size, decent battery life,",
  price: 55000,
  starRating: 4.0,
  imageUrl: "../../../assets/products/3.png"
},
{
  id: 21,
  productName: "Puma 2020",
  productOrders: "5500 |",
  productReviews: "400 |",
  description: "Sport sneaker and also casual outing.",
  price: 15000,
  starRating: 4.8,
  imageUrl: "../../../assets/recommededCollections/21.png"
},
{
  id: 19,
  productName: "Navy Polo Men",
  productOrders: "6000 | ",
  productReviews: "400 |",
  description: "Easy and comfy",
  price: 5000,
  starRating: 3.0,
  imageUrl: "../../../assets/topCollections/10.png"
},
  {
    id: 10,
    productName: "Air pod pro",
    productOrders: "",
    productReviews: "",
    description: "",
    price: 15000,
    starRating: 4.8,
    imageUrl: "../../../assets/samStore/19.png"
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
    id: 13,
    productName: "Toaster",
    productOrders: "250 | ",
    productReviews: "10 |",
    description: "",
    price: 4000,
    starRating: 4.8,
    imageUrl: "../../../assets/topCollections/13.png"
  },
  {
    id: 18,
    productName: "Women Shoe",
    productOrders: "",
    productReviews: "",
    description: "",
    price: 15000,
    starRating: 4.8,
    imageUrl: "../../../assets/recommededCollections/18.png"
  },
  {
    id: 20,
    productName: "Sneaker",
    productOrders: "22000  |  ",
    productReviews: "2000  |  ",
    description: "",
    price: 5500,
    starRating: 4.8,
    imageUrl: "../../../assets/samStore/20.png"
  },
  {
    id: 6,
    productName: "Air podpro",
    productOrders: "1500 Orders |",
    productReviews: "500 Reviews",
    description: "AirPod pro will forever change the way you use headphones.",
    price: 65000,
    starRating: 4.8,
    imageUrl: "../../../assets/products/6.png"
  }
]
  
