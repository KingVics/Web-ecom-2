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
    productOrders: "",
    productReviews: "",
    description: "",
    price: 15000,
    starRating: 4.5,
    imageUrl: "../../../assets/products/1.png"
  }, 
  {
    id: 3,
    productName: "BeatsbyDre Headphone",
    productOrders: "",
    productReviews: "",
    description: "",
    price: 5000,
    starRating: 4.0,
    imageUrl: "../../../assets/products/3.png"
  },
 {
    id: 4,
    productName: "SAMSUNG Galaxy Note S4 Pro",
    productOrders: "14523 Orders |  ",
    productReviews: "524 Reviews |",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    price: 108000,
    starRating: 4.7,
    imageUrl: "../../../assets/products/4.png"
  },
 {
    id: 2,
    productName: "Luxury wrist watch",
    productOrders: "",
    productReviews: "",
    description: "",
    price: 15000,
    starRating: 3.0,
    imageUrl: "../../../assets/products/2.png"
  },
  {
    id: 5,
    productName: "Women trendy shoes",
    productOrders: "",
    productReviews: "",
    description: "",
    price: 15000,
    starRating: 4.5,
    imageUrl: "../../../assets/products/5.png"
  },
{
    id: 6,
    productName: "Air pod pro",
    productOrders: "",
    productReviews: "",
    description: "",
    price: 15000,
    starRating: 4.8,
    imageUrl: "../../../assets/products/6.png"
  },
  {
    id: 7,
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
  },
  {
    productId: 11,
    productName: "2020 Air Sneakers",
    productOrders: "",
    productReviews: "",
    description: "",
    price: 15000,
    starRating: 4.5,
    imageUrl: "../../../assets/recommededCollections/11.png"
  },
  {
    productId: 15,
    productName: "BeatsbyDre Headphone",
    productOrders: "",
    productReviews: "",
    description: "",
    price: 5000,
    starRating: 4.0,
    imageUrl: "../../../assets/recommededCollections/15.png"
  },
  {
    productId: 22,
    productName: "Samsung Note 20s",
    productOrders: "",
    productReviews: "",
    description: "",
    price: 108000,
    starRating: 4.7,
    imageUrl: "../../../assets/recommededCollections/22.png"
  },
  {
    productId: 12,
    productName: "Luxury wrist watch",
    productOrders: "",
    productReviews: "",
    description: "",
    price: 15000,
    starRating: 3.0,
    imageUrl: "../../../assets/recommededCollections/12.png"
  },
  {
    productId: 9,
    productName: "Women trendy shoes",
    productOrders: "",
    productReviews: "",
    description: "",
    price: 15000,
    starRating: 4.5,
    imageUrl: "../../../assets/recommededCollections/16.png"
  },
  {
    productId: 9,
    productName: "Air pod pro",
    productOrders: "",
    productReviews: "",
    description: "",
    price: 15000,
    starRating: 4.8,
    imageUrl: "../../../assets/recommededCollections/9.png"
  },
  {
    productId: 2,
    productName: "Air pod pro",
    productOrders: "",
    productReviews: "",
    description: "",
    price: 15000,
    starRating: 4.8,
    imageUrl: "../../../assets/recommededCollections/2.png"
  },
  {
    productId: 1,
    productName: "Air pod pro",
    productOrders: "",
    productReviews: "",
    description: "",
    price: 15000,
    starRating: 4.8,
    imageUrl: "../../../assets/recommededCollections/1.png"
  },
  {
    productId: 18,
    productName: "Air pod pro",
    productOrders: "",
    productReviews: "",
    description: "",
    price: 15000,
    starRating: 4.8,
    imageUrl: "../../../assets/recommededCollections/18.png"
  },
  {
    productId: 5,
    productName: "Air pod pro",
    productOrders: "",
    productReviews: "",
    description: "",
    price: 15000,
    starRating: 4.8,
    imageUrl: "../../../assets/recommededCollections/5.png"
  },
  {
    productId: 4,
    productName: "Air pod pro",
    productOrders: "",
    productReviews: "",
    description: "",
    price: 15000,
    starRating: 4.8,
    imageUrl: "../../../assets/recommededCollections/4.png"
  },
  {
    productId: 3,
    productName: "Air pod pro",
    productOrders: "",
    productReviews: "",
    description: "",
    price: 15000,
    starRating: 4.8,
    imageUrl: "../../../assets/recommededCollections/3.png"
  },
  {
    productId: 16,
    productName: "Air pod pro",
    productOrders: "",
    productReviews: "",
    description: "",
    price: 15000,
    starRating: 4.8,
    imageUrl: "../../../assets/recommededCollections/16.png"
  },
  {
    productId: 21,
    productName: "Air pod pro",
    productOrders: "",
    productReviews: "",
    description: "",
    price: 15000,
    starRating: 4.8,
    imageUrl: "../../../assets/recommededCollections/21.png"
  },
  {
    productId: 17,
    productName: "Air pod pro",
    productOrders: "",
    productReviews: "",
    description: "",
    price: 15000,
    starRating: 4.8,
    imageUrl: "../../../assets/recommededCollections/17.png"
  },
  {
    productId: 2,
    productName: "Air pod pro",
    productOrders: "",
    productReviews: "",
    description: "",
    price: 15000,
    starRating: 4.8,
    imageUrl: "../../../assets/recommededCollections/2.png"
  },
  {
    productId: 1,
    productName: "Air pod pro",
    productOrders: "",
    productReviews: "",
    description: "",
    price: 15000,
    starRating: 4.8,
    imageUrl: "../../../assets/recommededCollections/1.png"
  },
  {
    productId: 7,
    productName: "Air pod pro",
    productOrders: "",
    productReviews: "",
    description: "",
    price: 15000,
    starRating: 4.8,
    imageUrl: "../../../assets/recommededCollections/7.png"
  }
  
]