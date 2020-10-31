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
    description: "he good The Beats by Dr. Dre Pill is a portable Bluetooth speaker with striking design, good sound and volume for its size, decent battery life,",
    price: 55000,
    starRating: 4.0,
    imageUrl: "../../../assets/products/3.png"
  },
 {
    id: 4,
    productName: "SAMSUNG Galaxy Note S8 Pro",
    productOrders: "14523 Orders |  ",
    productReviews: "524 Reviews |",
    description: "The Galaxy Note 8 is a terrific phone in 2018, with dual cameras and a boatload of stylus tricks.",
    price: 108000,
    starRating: 4.7,
    imageUrl: "../../../assets/products/4.png"
  },
 {
    id: 2,
    productName: "Luxury wrist watch",
    productOrders: "",
    productReviews: "",
    description: "Luxury for both men and women.",
    price: 25000,
    starRating: 3.0,
    imageUrl: "../../../assets/products/2.png"
  },
  {
    id: 5,
    productName: "Women trendy shoes",
    productOrders: "",
    productReviews: "",
    description: "Trend with the lastest shoe to meet your dresses needs.",
    price: 75000,
    starRating: 4.5,
    imageUrl: "../../../assets/products/5.png"
  },
{
    id: 6,
    productName: "Air podpro",
    productOrders: "1500",
    productReviews: "500",
    description: "AirPod pro will forever change the way you use headphones.",
    price: 65000,
    starRating: 4.8,
    imageUrl: "../../../assets/products/6.png"
  },
  
  
]