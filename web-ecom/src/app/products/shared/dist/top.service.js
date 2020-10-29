"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TopService = void 0;
var core_1 = require("@angular/core");
var TopService = /** @class */ (function () {
    function TopService() {
    }
    ProductService.prototype.getCollections = function () {
        return PRODUCTS;
    };
    ProductService.prototype.getTop = function (id) {
        return PRODUCTS.find(function (top ) { return top.id === id; });
    };
    ProductService = __decorate([
        core_1.Injectable()
    ], TopService);
    return TopService;
}());
exports.TopService = TopService;

var PRODUCTS = [{
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
  }
]