import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RecommendedProduct {

  constructor() { }
  getRecomProducts(){
    return RECOMMENDED
  }

  getProducts(id:number) {
    return RECOMMENDED.find(product_entry => product_entry.id === id)
  }
}

let RECOMMENDED = [{
    id: 11,
    productName: "Diamond Ear Ring",
    productOrders: "1000 | ",
    productReviews: "39 | ",
    description: "",
    price: 8500,
    starRating: 4.5,
    imageUrl: "../../../assets/recommededCollections/11.png"
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
    id: 16,
    productName: "Women trendy shoes",
    productOrders: "5000 | ",
    productReviews: "400 | ",
    description: "",
    price: 15000,
    starRating: 4.5,
    imageUrl: "../../../assets/recommededCollections/16.png"
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
    id: 2,
    productName: "Luxury wrist watch",
    productOrders: "1400 Orders | ",
    productReviews: "299 Reviews | ",
    description: "Luxury for both men and women.",
    price: 25000,
    starRating: 3.0,
    imageUrl: "../../../assets/products/2.png"
  },
  {
    id: 1,
    productName: "2020 Air Sneakers",
    productOrders: "10000 Orders | ",
    productReviews: "5500 Review | ",
    description: "Trend with the lastest from Nike. The lastest Air sneakers gives you comfort and durability.",
    price: 15000,
    starRating: 4.5,
    imageUrl: "../../../assets/products/1.png"
  }, 
  {
    id: 18,
    productName: "Corporate Women Shoe",
    productOrders: "45000 | ",
    productReviews: "4000 | ",
    description: "",
    price: 15000,
    starRating: 4.8,
    imageUrl: "../../../assets/recommededCollections/18.png"
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
    id: 4,
    productName: "SAMSUNG Galaxy Note S8 Pro",
    productOrders: "14523 Orders |  ",
    productReviews: "524 Reviews | ",
    description: "The Galaxy Note 8 is a terrific phone in 2018, with dual cameras and a boatload of stylus tricks.",
    price: 108000,
    starRating: 4.7,
    imageUrl: "../../../assets/products/4.png"
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
    id: 16,
    productName: "Women trendy shoes",
    productOrders: "5000 | ",
    productReviews: "400 | ",
    description: "",
    price: 15000,
    starRating: 4.5,
    imageUrl: "../../../assets/recommededCollections/16.png"
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
    id: 17,
    productName: "Women Shoe",
    productOrders: "50000 |",
    productReviews: "500 |",
    description: "",
    price: 15000,
    starRating: 4.8,
    imageUrl: "../../../assets/recommededCollections/17.png"
  },
  {
    id: 2,
    productName: "Luxury wrist watch",
    productOrders: "1400 Orders | ",
    productReviews: "299 Reviews | ",
    description: "Luxury for both men and women.",
    price: 25000,
    starRating: 3.0,
    imageUrl: "../../../assets/products/2.png"
  },
  {
    id: 1,
    productName: "2020 Air Sneakers",
    productOrders: "10000 Orders | ",
    productReviews: "5500 Review | ",
    description: "Trend with the lastest from Nike. The lastest Air sneakers gives you comfort and durability.",
    price: 15000,
    starRating: 4.5,
    imageUrl: "../../../assets/products/1.png"
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
  }
]
  
