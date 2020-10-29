import {Injectable} from "@angular/core"



@Injectable()
export class ProductService {
    getProduct() {
        return PRODUCTS
    }

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
  
  
]