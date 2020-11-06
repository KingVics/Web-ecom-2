import {Injectable} from "@angular/core"



@Injectable()
export class AllProductService {
   

    getProducts(id:number) {
      return PRODUCTS.find(product_entry => product_entry.id === id)
    }

}

let PRODUCTS = [{
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
},
  {
    id: 11,
    productName: "2020 Air Sneakers",
    productOrders: "",
    productReviews: "",
    description: "",
    price: 15000,
    starRating: 4.5,
    imageUrl: "../../../assets/recommededCollections/11.png"
  },
  {
    id: 15,
    productName: "BeatsbyDre Headphone",
    productOrders: "",
    productReviews: "",
    description: "",
    price: 5000,
    starRating: 4.0,
    imageUrl: "../../../assets/recommededCollections/15.png"
  },
  {
    id: 22,
    productName: "Samsung Note 20s",
    productOrders: "",
    productReviews: "",
    description: "",
    price: 108000,
    starRating: 4.7,
    imageUrl: "../../../assets/recommededCollections/22.png"
  },
  {
    id: 12,
    productName: "Luxury wrist watch",
    productOrders: "",
    productReviews: "",
    description: "",
    price: 15000,
    starRating: 3.0,
    imageUrl: "../../../assets/recommededCollections/12.png"
  },
  {
    id: 9,
    productName: "Women trendy shoes",
    productOrders: "",
    productReviews: "",
    description: "",
    price: 15000,
    starRating: 4.5,
    imageUrl: "../../../assets/recommededCollections/16.png"
  },
  {
    id: 9,
    productName: "Air pod pro",
    productOrders: "",
    productReviews: "",
    description: "",
    price: 15000,
    starRating: 4.8,
    imageUrl: "../../../assets/recommededCollections/9.png"
  },
  {
    id: 2,
    productName: "Air pod pro",
    productOrders: "",
    productReviews: "",
    description: "",
    price: 15000,
    starRating: 4.8,
    imageUrl: "../../../assets/recommededCollections/2.png"
  },
  {
    id: 1,
    productName: "Air pod pro",
    productOrders: "",
    productReviews: "",
    description: "",
    price: 15000,
    starRating: 4.8,
    imageUrl: "../../../assets/recommededCollections/1.png"
  },
  {
    id: 18,
    productName: "Air pod pro",
    productOrders: "",
    productReviews: "",
    description: "",
    price: 15000,
    starRating: 4.8,
    imageUrl: "../../../assets/recommededCollections/18.png"
  },
  {
    id: 5,
    productName: "Air pod pro",
    productOrders: "",
    productReviews: "",
    description: "",
    price: 15000,
    starRating: 4.8,
    imageUrl: "../../../assets/recommededCollections/5.png"
  },
  {
    id: 4,
    productName: "Air pod pro",
    productOrders: "",
    productReviews: "",
    description: "",
    price: 15000,
    starRating: 4.8,
    imageUrl: "../../../assets/recommededCollections/4.png"
  },
  {
    id: 3,
    productName: "Air pod pro",
    productOrders: "",
    productReviews: "",
    description: "",
    price: 15000,
    starRating: 4.8,
    imageUrl: "../../../assets/recommededCollections/3.png"
  },
  {
    id: 16,
    productName: "Air pod pro",
    productOrders: "",
    productReviews: "",
    description: "",
    price: 15000,
    starRating: 4.8,
    imageUrl: "../../../assets/recommededCollections/16.png"
  },
  {
    id: 21,
    productName: "Air pod pro",
    productOrders: "",
    productReviews: "",
    description: "",
    price: 15000,
    starRating: 4.8,
    imageUrl: "../../../assets/recommededCollections/21.png"
  },
  {
    id: 17,
    productName: "Air pod pro",
    productOrders: "",
    productReviews: "",
    description: "",
    price: 15000,
    starRating: 4.8,
    imageUrl: "../../../assets/recommededCollections/17.png"
  },
  {
    id: 2,
    productName: "Air pod pro",
    productOrders: "",
    productReviews: "",
    description: "",
    price: 15000,
    starRating: 4.8,
    imageUrl: "../../../assets/recommededCollections/2.png"
  },
  {
    id: 1,
    productName: "Air pod pro",
    productOrders: "",
    productReviews: "",
    description: "",
    price: 15000,
    starRating: 4.8,
    imageUrl: "../../../assets/recommededCollections/1.png"
  },
  {
    id: 7,
    productName: "Air pod pro",
    productOrders: "",
    productReviews: "",
    description: "",
    price: 15000,
    starRating: 4.8,
    imageUrl: "../../../assets/recommededCollections/7.png"
  },
  {
    id: 6,
    productName: "2020 Air Sneakers",
    productOrders: "",
    productReviews: "",
    description: "",
    price: 15000,
    starRating: 4.5,
    imageUrl: "../../../assets/samStore/6.png"
  },
  {
    id: 5,
    productName: "Trendy Shoe",
    productOrders: "",
    productReviews: "",
    description: "",
    price: 5000,
    starRating: 4.0,
    imageUrl: "../../../assets/samStore/5.png"
  },
  {
    id: 7,
    productName: "Samsung Note 20s",
    productOrders: "",
    productReviews: "",
    description: "",
    price: 108000,
    starRating: 4.7,
    imageUrl: "../../../assets/samStore/7.png"
  },
  {
    id: 8,
    productName: "Luxury wrist watch",
    productOrders: "",
    productReviews: "",
    description: "",
    price: 15000,
    starRating: 3.0,
    imageUrl: "../../../assets/samStore/8.png"
  },
  {
    id: 15,
    productName: "Women trendy shoes",
    productOrders: "",
    productReviews: "",
    description: "",
    price: 15000,
    starRating: 4.5,
    imageUrl: "../../../assets/samStore/15.png"
  },
  {
    id: 22,
    productName: "Air pod pro",
    productOrders: "",
    productReviews: "",
    description: "",
    price: 15000,
    starRating: 4.8,
    imageUrl: "../../../assets/samStore/22.png"
  },
  {
    id: 12,
    productName: "Air pod pro",
    productOrders: "",
    productReviews: "",
    description: "",
    price: 15000,
    starRating: 4.8,
    imageUrl: "../../../assets/samStore/12.png"
  },
  {
    id: 4,
    productName: "Air pod pro",
    productOrders: "",
    productReviews: "",
    description: "",
    price: 15000,
    starRating: 4.8,
    imageUrl: "../../../assets/samStore/4.png"
  },
  {
    id: 9,
    productName: "Air pod pro",
    productOrders: "",
    productReviews: "",
    description: "",
    price: 15000,
    starRating: 4.8,
    imageUrl: "../../../assets/samStore/9.png"
  },
  {
    id: 3,
    productName: "Air pod pro",
    productOrders: "",
    productReviews: "",
    description: "",
    price: 15000,
    starRating: 4.8,
    imageUrl: "../../../assets/samStore/3.png"
  },
  {
    id: 21,
    productName: "Air pod pro",
    productOrders: "",
    productReviews: "",
    description: "",
    price: 15000,
    starRating: 4.8,
    imageUrl: "../../../assets/samStore/21.png"
  },
  {
    id: 19,
    productName: "Air pod pro",
    productOrders: "",
    productReviews: "",
    description: "",
    price: 15000,
    starRating: 4.8,
    imageUrl: "../../../assets/samStore/10.png"
  },
  {
    id: 19,
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
    productName: "Air pod pro",
    productOrders: "",
    productReviews: "",
    description: "",
    price: 15000,
    starRating: 4.8,
    imageUrl: "../../../assets/samStore/8.png"
  },
  {
    id: 13,
    productName: "Air pod pro",
    productOrders: "",
    productReviews: "",
    description: "",
    price: 15000,
    starRating: 4.8,
    imageUrl: "../../../assets/samStore/13.png"
  },
  {
    id: 18,
    productName: "Air pod pro",
    productOrders: "",
    productReviews: "",
    description: "",
    price: 15000,
    starRating: 4.8,
    imageUrl: "../../../assets/samStore/18.png"
  },
  {
    id: 20,
    productName: "Air pod pro",
    productOrders: "",
    productReviews: "",
    description: "",
    price: 15000,
    starRating: 4.8,
    imageUrl: "../../../assets/samStore/20.png"
  },
  {
    id: 6,
    productName: "Airpod pro",
    productOrders: "1400",
    productReviews: "AirPod pro will forever change the way you use headphones.",
    description: "",
    price: 65000,
    starRating: 4.8,
    imageUrl: "../../../assets/samStore/6.png"
  }
]