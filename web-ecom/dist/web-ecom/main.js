(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/hQp":
/*!***********************************************!*\
  !*** ./src/app/products/list/product.list.ts ***!
  \***********************************************/
/*! exports provided: ProductsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsListComponent", function() { return ProductsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function (a1) { return ["/products", a1]; };
class ProductsListComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProductsListComponent.ɵfac = function ProductsListComponent_Factory(t) { return new (t || ProductsListComponent)(); };
ProductsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductsListComponent, selectors: [["app-list"]], inputs: { data: "data" }, decls: 13, vars: 6, consts: [[3, "routerLink"], [1, "product__list_card"], [3, "src"], [1, "product__details"], [1, "product__name"], [1, "product__price"]], template: function ProductsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.data.id));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.data.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.productName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20A6", ctx.data.price, "");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".product__list_card[_ngcontent-%COMP%] {\r\n  background: transparent;\r\n  width: 100%;\r\n  height: 100%;\r\n  border: 1px solid #fff;\r\n  border-radius: 7px;\r\n  opacity: 1;\r\n  cursor: pointer;\r\n  outline: 0;\r\n}\r\n\r\n.product__list_card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n.product__details[_ngcontent-%COMP%] {\r\n  background: #B9B9B9 0% 0% no-repeat padding-box;\r\n  border-radius: 0px 0px 7px 7px;\r\n  box-shadow: 1px 1px 2px 1px rgba(0,0,0,.4);\r\n  width: 100%;\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n}\r\n\r\n.product__name[_ngcontent-%COMP%], .product__price[_ngcontent-%COMP%] {\r\n  margin-left: 1rem;\r\n}\r\n\r\n.product__name[_ngcontent-%COMP%] {\r\n  padding: .1rem;\r\n  font-weight: 400;\r\n  font-size: 12px;\r\n}\r\n\r\n.product__price[_ngcontent-%COMP%] {\r\n  font-weight: 900;\r\n  font-size: large;\r\n  color: #101010;\r\n  opacity: 1;\r\n  padding: .1rem;\r\n}\r\n\r\n@media (max-width: 540px) {\r\n  .product__list_card[_ngcontent-%COMP%] {\r\n    padding: .5rem 0;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvbGlzdC9wcm9kdWN0Lmxpc3QuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsZUFBZTtFQUNmLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLCtDQUErQztFQUMvQyw4QkFBOEI7RUFDOUIsMENBQTBDO0VBQzFDLFdBQVc7RUFDWCwyQkFBbUI7RUFBbkIsd0JBQW1CO0VBQW5CLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxVQUFVO0VBQ1YsY0FBYztBQUNoQjs7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0cy9saXN0L3Byb2R1Y3QubGlzdC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdF9fbGlzdF9jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgb3BhY2l0eTogMTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3V0bGluZTogMDtcclxufVxyXG5cclxuLnByb2R1Y3RfX2xpc3RfY2FyZCBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucHJvZHVjdF9fZGV0YWlscyB7XHJcbiAgYmFja2dyb3VuZDogI0I5QjlCOSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA3cHggN3B4O1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IDFweCByZ2JhKDAsMCwwLC40KTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG59XHJcblxyXG4ucHJvZHVjdF9fbmFtZSxcclxuLnByb2R1Y3RfX3ByaWNlIHtcclxuICBtYXJnaW4tbGVmdDogMXJlbTtcclxufVxyXG5cclxuLnByb2R1Y3RfX25hbWUge1xyXG4gIHBhZGRpbmc6IC4xcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4ucHJvZHVjdF9fcHJpY2Uge1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICBjb2xvcjogIzEwMTAxMDtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHBhZGRpbmc6IC4xcmVtO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTQwcHgpIHtcclxuICAucHJvZHVjdF9fbGlzdF9jYXJkIHtcclxuICAgIHBhZGRpbmc6IC41cmVtIDA7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list',
                template: `

    <div>
        <div [routerLink]="['/products', data.id]">
            <div class="product__list_card">
                <div><img src={{data.imageUrl}} /></div>
                <div class="product__details">
                    <div class="product__name">
                        <span>{{data.productName}}</span>
                    </div>
                    <div class="product__price">
                        <span>₦{{data.price}}</span>
                    </div>
                </div>
            <div> 
        </div>
    </div>



  `,
                styleUrls: ["../../products/list/product.list.css"]
            }]
    }], function () { return []; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Office\java\path\repository\GAD-Web-ecom-2-project\web-ecom\src\main.ts */"zUnb");


/***/ }),

/***/ "7Ufg":
/*!************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.ts ***!
  \************************************************/
/*! exports provided: MainNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavComponent", function() { return MainNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _user_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user/auth.service */ "SkYw");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");














const _c0 = function () { return ["user/login"]; };
function MainNavComponent_a_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sign In ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
function MainNavComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Another action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Something else here");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function () { return ["user/register"]; };
function MainNavComponent_a_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
} }
function MainNavComponent_button_38_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainNavComponent_button_38_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c2 = ["*"];
class MainNavComponent {
    constructor(breakpointObserver, auth) {
        this.breakpointObserver = breakpointObserver;
        this.auth = auth;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(result => result.matches), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])());
    }
}
MainNavComponent.ɵfac = function MainNavComponent_Factory(t) { return new (t || MainNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
MainNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainNavComponent, selectors: [["app-main-nav"]], ngContentSelectors: _c2, decls: 59, vars: 15, consts: [[1, "sidenav-container"], ["fixedInViewport", "true", 1, "sidenav", 3, "mode", "opened"], ["drawer", ""], ["mat-list-item", "", "href", "#"], [1, "form-inline", "center-sm"], [1, "input-group", "md-form", "form-sm", "form-1", "pl-0"], [1, "input-group-prepend"], ["type", "text", "placeholder", "Search for a product", "aria-label", "Search", 1, "form-control", "my-0", "py-1"], ["mat-list-item", ""], ["mat-list-item", "", 3, "routerLink", 4, "ngIf"], ["class", "dropdown show", 4, "ngIf"], ["color", "primary"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click", 4, "ngIf"], ["mat-list-item", "", 3, "routerLink"], [1, "dropdown", "show"], ["href", "#", "role", "button", "id", "dropdownMenuLink", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "dropdown-btn", "dropdown-toggle"], ["src", "assets/profile/profile.svg", "alt", "profile"], ["aria-labelledby", "dropdownMenuLink", 1, "dropdown-menu"], ["href", "#", 1, "dropdown-item"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click"], ["aria-label", "Side nav toggle icon"]], template: function MainNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Men");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Women");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Electronics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Home & Office");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Phones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Gaming");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Sport");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Automobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Food & Drinks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, MainNavComponent_a_32_Template, 2, 2, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, MainNavComponent_div_33_Template, 10, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, MainNavComponent_a_35_Template, 2, 2, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-toolbar", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, MainNavComponent_button_38_Template, 3, 0, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Men");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Women");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Electronics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Home & Office");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Phones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Gaming");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Sport");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Automobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Food & Drinks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 9, ctx.isHandset$) ? "over" : "side")("opened", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 11, ctx.isHandset$) === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 7, ctx.isHandset$) ? "dialog" : "navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.auth.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.auth.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.auth.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 13, ctx.isHandset$));
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenav"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListItem"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavContent"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: [".sidenav-container[_ngcontent-%COMP%] {\n   \n   z-index: 100;\n \n}\n\n.sidenav[_ngcontent-%COMP%] {\n  width: 200px;\n\n}\n\n.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  \n\n}\n\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  background: #E1E1E1 0% 0% no-repeat padding-box;\n}\n\n.mat-toolbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: #101010;\n  margin: 15px 15px 0;\n  text-decoration: none;\n  font-size: 14px;\n  \n}\n\n.mat-toolbar-single-row[_ngcontent-%COMP%] {\n  padding: 0 28px;\n}\n\nli[_ngcontent-%COMP%] {\n\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n@media (max-width:600px) {\n  .mat-toolbar.mat-primary[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .input-group-prepend[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 20%;\n  }\n  .overide_profile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    display: block;\n    \n  }\n \n}\n\n@media (min-width:768px) {\n  .sidenav[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .mat-drawer-content.mat-sidenav-content[_ngcontent-%COMP%] {\n    overflow: hidden;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1uYXYvbWFpbi1uYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtHQUNHLG1CQUFtQjtHQUNuQixZQUFZOztBQUVmOztBQUVBO0VBQ0UsWUFBWTs7QUFFZDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFO1dBQ1M7O0FBRVg7O0FBR0E7RUFDRSwrQ0FBK0M7QUFDakQ7O0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsZUFBZTs7QUFFakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBOztFQUVFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUNBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsY0FBYztJQUNkLHlCQUF5QjtFQUMzQjs7QUFFRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21haW4tbmF2L21haW4tbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZW5hdi1jb250YWluZXIge1xuICAgLyogaGVpZ2h0OiAxMDAlOyAgKi9cbiAgIHotaW5kZXg6IDEwMDtcbiBcbn1cblxuLnNpZGVuYXYge1xuICB3aWR0aDogMjAwcHg7XG5cbn1cblxuLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgLyogcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwOyAqL1xuXG59XG5cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZDogI0UxRTFFMSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG59XG4ubWF0LXRvb2xiYXIgYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sb3I6ICMxMDEwMTA7XG4gIG1hcmdpbjogMTVweCAxNXB4IDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBcbn1cblxuLm1hdC10b29sYmFyLXNpbmdsZS1yb3cge1xuICBwYWRkaW5nOiAwIDI4cHg7XG59XG5cbmxpIHtcblxuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDo2MDBweCkge1xuICAubWF0LXRvb2xiYXIubWF0LXByaW1hcnkgYSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuaW5wdXQtZ3JvdXAtcHJlcGVuZCBpbnB1dCB7XG4gICAgd2lkdGg6IDIwJTtcbiAgfVxuICAub3ZlcmlkZV9wcm9maWxlIGltZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgLyogbWFyZ2luOiAxMHB4IDEwcHggMDsgKi9cbiAgfVxuIFxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDo3NjhweCkge1xuICAuc2lkZW5hdiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAubWF0LWRyYXdlci1jb250ZW50Lm1hdC1zaWRlbmF2LWNvbnRlbnQge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainNavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-nav',
                templateUrl: './main-nav.component.html',
                styleUrls: ['./main-nav.component.css']
            }]
    }], function () { return [{ type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"] }, { type: _user_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "8xIo":
/*!***********************************************!*\
  !*** ./src/app/products/top/top.component.ts ***!
  \***********************************************/
/*! exports provided: TopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopComponent", function() { return TopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function (a1) { return ["/products", a1]; };
class TopComponent {
    constructor() { }
    ngOnInit() {
    }
}
TopComponent.ɵfac = function TopComponent_Factory(t) { return new (t || TopComponent)(); };
TopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopComponent, selectors: [["app-top"]], inputs: { top: "top" }, decls: 13, vars: 6, consts: [[3, "routerLink"], [1, "product__list_card"], ["alt", "", "srcset", "", 3, "src"], [1, "product_details"], [1, "product_name"], [1, "product_price"]], template: function TopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.top.id));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.top.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.top.productName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20A6", ctx.top.price, "");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".top_collection[_ngcontent-%COMP%]{\r\n  background: #FEFEFE 0% 0% no-repeat padding-box;\r\n  border: 1px solid #707070; \r\n  border-radius: 15px;\r\n  opacity: .95;\r\n  margin: 2rem;\r\n  padding-top: 3rem;\r\n  padding-bottom: 1rem; \r\n  overflow: hidden;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n\r\n}\r\n\r\n.top__collection_header[_ngcontent-%COMP%] {\r\n  letter-spacing: 0px;\r\n  color: #101010;\r\n  font: normal normal 900 29px/39px Segoe UI;\r\n  letter-spacing: 0px;\r\n  color: #101010;\r\n  text-align: center;\r\n \r\n}\r\n\r\n.product_list_card[_ngcontent-%COMP%] {\r\n  background: transparent;\r\n  width: 100%;\r\n  height: 100%;\r\n  border: 1px solid #fff;\r\n  border-radius: 7px;\r\n  opacity: 1;\r\n  cursor: pointer;\r\n}\r\n\r\n.product_list_card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n.product_details[_ngcontent-%COMP%] {\r\n  background: #B9B9B9 0% 0% no-repeat padding-box;\r\n  border-radius: 0px 0px 7px 7px;\r\n  box-shadow: 1px 1px 2px 1px rgba(0,0,0,.4);\r\n  width: 100%;\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n}\r\n\r\n.product_name[_ngcontent-%COMP%], .product_price[_ngcontent-%COMP%] {\r\n  margin-left: 1rem;\r\n}\r\n\r\n.product_name[_ngcontent-%COMP%] {\r\n  padding: .1rem;\r\n  font-weight: 400;\r\n  font-size: 12px;\r\n}\r\n\r\n.product_price[_ngcontent-%COMP%] {\r\n  font-weight: 900;\r\n  font-size: large;\r\n  color: #101010;\r\n  opacity: 1;\r\n  padding: .1rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvdG9wL3RvcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0NBQStDO0VBQy9DLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQiwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjs7QUFFcEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLDBDQUEwQztFQUMxQyxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGtCQUFrQjs7QUFFcEI7O0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsK0NBQStDO0VBQy9DLDhCQUE4QjtFQUM5QiwwQ0FBMEM7RUFDMUMsV0FBVztFQUNYLDJCQUFtQjtFQUFuQix3QkFBbUI7RUFBbkIsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFVBQVU7RUFDVixjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvdG9wL3RvcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcF9jb2xsZWN0aW9ue1xyXG4gIGJhY2tncm91bmQ6ICNGRUZFRkUgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7IFxyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgb3BhY2l0eTogLjk1O1xyXG4gIG1hcmdpbjogMnJlbTtcclxuICBwYWRkaW5nLXRvcDogM3JlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTsgXHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcblxyXG59XHJcblxyXG4udG9wX19jb2xsZWN0aW9uX2hlYWRlciB7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICBjb2xvcjogIzEwMTAxMDtcclxuICBmb250OiBub3JtYWwgbm9ybWFsIDkwMCAyOXB4LzM5cHggU2Vnb2UgVUk7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICBjb2xvcjogIzEwMTAxMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiBcclxufVxyXG4ucHJvZHVjdF9saXN0X2NhcmQge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnByb2R1Y3RfbGlzdF9jYXJkIGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5wcm9kdWN0X2RldGFpbHMge1xyXG4gIGJhY2tncm91bmQ6ICNCOUI5QjkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggN3B4IDdweDtcclxuICBib3gtc2hhZG93OiAxcHggMXB4IDJweCAxcHggcmdiYSgwLDAsMCwuNCk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxufVxyXG5cclxuLnByb2R1Y3RfbmFtZSxcclxuLnByb2R1Y3RfcHJpY2Uge1xyXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG59XHJcblxyXG4ucHJvZHVjdF9uYW1lIHtcclxuICBwYWRkaW5nOiAuMXJlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLnByb2R1Y3RfcHJpY2Uge1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICBjb2xvcjogIzEwMTAxMDtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHBhZGRpbmc6IC4xcmVtO1xyXG59XHJcblxyXG4iXX0= */", ".product__list_card[_ngcontent-%COMP%] {\r\n  background: transparent;\r\n  width: 100%;\r\n  height: 100%;\r\n  border: 1px solid #fff;\r\n  border-radius: 7px;\r\n  opacity: 1;\r\n  cursor: pointer;\r\n  outline: 0;\r\n}\r\n\r\n.product__list_card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n.product__details[_ngcontent-%COMP%] {\r\n  background: #B9B9B9 0% 0% no-repeat padding-box;\r\n  border-radius: 0px 0px 7px 7px;\r\n  box-shadow: 1px 1px 2px 1px rgba(0,0,0,.4);\r\n  width: 100%;\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n}\r\n\r\n.product__name[_ngcontent-%COMP%], .product__price[_ngcontent-%COMP%] {\r\n  margin-left: 1rem;\r\n}\r\n\r\n.product__name[_ngcontent-%COMP%] {\r\n  padding: .1rem;\r\n  font-weight: 400;\r\n  font-size: 12px;\r\n}\r\n\r\n.product__price[_ngcontent-%COMP%] {\r\n  font-weight: 900;\r\n  font-size: large;\r\n  color: #101010;\r\n  opacity: 1;\r\n  padding: .1rem;\r\n}\r\n\r\n@media (max-width: 540px) {\r\n  .product__list_card[_ngcontent-%COMP%] {\r\n    padding: .5rem 0;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvbGlzdC9wcm9kdWN0Lmxpc3QuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsZUFBZTtFQUNmLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLCtDQUErQztFQUMvQyw4QkFBOEI7RUFDOUIsMENBQTBDO0VBQzFDLFdBQVc7RUFDWCwyQkFBbUI7RUFBbkIsd0JBQW1CO0VBQW5CLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxVQUFVO0VBQ1YsY0FBYztBQUNoQjs7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0cy9saXN0L3Byb2R1Y3QubGlzdC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdF9fbGlzdF9jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgb3BhY2l0eTogMTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3V0bGluZTogMDtcclxufVxyXG5cclxuLnByb2R1Y3RfX2xpc3RfY2FyZCBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucHJvZHVjdF9fZGV0YWlscyB7XHJcbiAgYmFja2dyb3VuZDogI0I5QjlCOSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA3cHggN3B4O1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IDFweCByZ2JhKDAsMCwwLC40KTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG59XHJcblxyXG4ucHJvZHVjdF9fbmFtZSxcclxuLnByb2R1Y3RfX3ByaWNlIHtcclxuICBtYXJnaW4tbGVmdDogMXJlbTtcclxufVxyXG5cclxuLnByb2R1Y3RfX25hbWUge1xyXG4gIHBhZGRpbmc6IC4xcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4ucHJvZHVjdF9fcHJpY2Uge1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICBjb2xvcjogIzEwMTAxMDtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHBhZGRpbmc6IC4xcmVtO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTQwcHgpIHtcclxuICAucHJvZHVjdF9fbGlzdF9jYXJkIHtcclxuICAgIHBhZGRpbmc6IC41cmVtIDA7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-top',
                template: `

    <div>
        <div [routerLink]="['/products', top.id]">
            <div class="product__list_card">
            <div><img src="{{top.imageUrl}}" alt="" srcset=""></div>
               <div class="product_details">
                    <div class="product_name">
                     <span>{{top.productName}}</span>
                    </div>
                <div class="product_price">
                     <span>₦{{top.price}}</span>
              </div>
             </div>
            <div> 
        </div>
    </div>



  `,
                styleUrls: ['./top.component.css', '../list/product.list.css']
            }]
    }], function () { return []; }, { top: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "9UTf":
/*!****************************************************!*\
  !*** ./src/app/products/shared/product.service.ts ***!
  \****************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ProductService {
    getProduct() {
        return PRODUCTS;
    }
    getProducts(id) {
        return PRODUCTS.find(product_entry => product_entry.id === id);
    }
}
ProductService.ɵfac = function ProductService_Factory(t) { return new (t || ProductService)(); };
ProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductService, factory: ProductService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();
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
        productName: "SAMSUNG Galaxy Note S8",
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
];


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CG0s":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ErrorComponent {
    constructor() { }
    ngOnInit() {
    }
}
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) { return new (t || ErrorComponent)(); };
ErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorComponent, selectors: [["app-error"]], decls: 2, vars: 0, consts: [[1, "errorMessage"]], template: function ErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "404'd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".errorMessage[_ngcontent-%COMP%] {\r\n  margin-top:150px;\r\n  font-size: 170px;\r\n  text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXJyb3IvZXJyb3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvZXJyb3IvZXJyb3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvck1lc3NhZ2Uge1xyXG4gIG1hcmdpbi10b3A6MTUwcHg7XHJcbiAgZm9udC1zaXplOiAxNzBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-error',
                templateUrl: './error.component.html',
                styleUrls: ['./error.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "EfPX":
/*!************************************************!*\
  !*** ./src/app/carousel/carousel.component.ts ***!
  \************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CarouselComponent {
    constructor() { }
    ngOnInit() {
    }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(); };
CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarouselComponent, selectors: [["app-carousel"]], decls: 46, vars: 0, consts: [["id", "carouselExampleIndicators", "data-ride", "carousel", 1, "carousel", "slide", "overide"], [1, "carousel-indicators"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "0", 1, "active"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "1"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "2"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "3"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "4"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "assets/banner1.png", "alt", "First slide", 1, "d-block", "w-100"], [1, "carousel-caption", "d-md-block"], [1, "btn", "shop"], [1, ""], [1, "carousel-item"], ["src", "assets/banner1.png", "alt", "Second slide", 1, "d-block", "w-100"], ["src", "assets/banner1.png", "alt", "Third slide", 1, "d-block", "w-100"], ["src", "assets/banner1.png", "alt", "fourth slide", 1, "d-block", "w-100"], ["src", "assets/banner1.png", "alt", "fifth slide", 1, "d-block", "w-100"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "shop now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "shop now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "shop now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "shop now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "shop now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".shop[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n  text-transform: uppercase;\r\n  font:normal normal bold 20px/27px Segoe UI;\r\nletter-spacing: 0px;\r\ncolor: #FFFFFF;\r\nopacity: 1;\r\ntext-align: center;\r\n\r\nheight: 27px;\r\n}\r\n.shop[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  left: 20px;\r\n  bottom: 6px;\r\n  width: 200px;\r\nheight: 52px;\r\nbackground: #EB5926 0% 0% no-repeat padding-box;\r\nborder: 1px solid #707070;\r\nborder-radius: 50px;\r\nopacity: 1;\r\n}\r\n@media(min-width:300px) and (max-width:600px) {\r\n  \r\n}\r\n@media screen and (max-width:1168px){\r\n  .shop[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    left: 20px;\r\n    bottom: 3px;\r\n    width: 180px;\r\n  height: 50px;\r\n\r\n  }\r\n\r\n}\r\n@media screen and (max-width:1056px){\r\n  .shop[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    left: 20px;\r\n    bottom: 3px;\r\n    width: 145px;\r\n  height: 40px;\r\n\r\n  }\r\n\r\n}\r\n@media screen and (max-width:928px){\r\n  .shop[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    left: 20px;\r\n    bottom: -10px;\r\n    width: 130px;\r\n  height: 35px;\r\n\r\n  }\r\n  .shop[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n    text-transform: uppercase;\r\n    font:normal normal bold 18px Segoe UI;\r\n  letter-spacing: 0px;\r\n  color: #FFFFFF;\r\n  opacity: 1;\r\n  text-align: center;\r\n\r\n  height: 22px;\r\n  }\r\n\r\n}\r\n@media screen and (max-width:697px){\r\n  .shop[_ngcontent-%COMP%]{\r\n  display: none;\r\n\r\n  }\r\n\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QiwwQ0FBMEM7QUFDNUMsbUJBQW1CO0FBQ25CLGNBQWM7QUFDZCxVQUFVO0FBQ1Ysa0JBQWtCOztBQUVsQixZQUFZO0FBQ1o7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7QUFDZCxZQUFZO0FBQ1osK0NBQStDO0FBQy9DLHlCQUF5QjtBQUN6QixtQkFBbUI7QUFDbkIsVUFBVTtBQUNWO0FBRUE7RUFDRTs7S0FFRztBQUNMO0FBQ0E7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7RUFDZCxZQUFZOztFQUVaOztBQUVGO0FBQ0E7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7RUFDZCxZQUFZOztFQUVaOztBQUVGO0FBRUE7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsYUFBYTtJQUNiLFlBQVk7RUFDZCxZQUFZOztFQUVaO0VBQ0E7SUFDRSx5QkFBeUI7SUFDekIscUNBQXFDO0VBQ3ZDLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsVUFBVTtFQUNWLGtCQUFrQjs7RUFFbEIsWUFBWTtFQUNaOztBQUVGO0FBRUE7RUFDRTtFQUNBLGFBQWE7O0VBRWI7OztBQUdGIiwiZmlsZSI6InNyYy9hcHAvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaG9wIGRpdntcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQ6bm9ybWFsIG5vcm1hbCBib2xkIDIwcHgvMjdweCBTZWdvZSBVSTtcclxubGV0dGVyLXNwYWNpbmc6IDBweDtcclxuY29sb3I6ICNGRkZGRkY7XHJcbm9wYWNpdHk6IDE7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbmhlaWdodDogMjdweDtcclxufVxyXG4uc2hvcHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMjBweDtcclxuICBib3R0b206IDZweDtcclxuICB3aWR0aDogMjAwcHg7XHJcbmhlaWdodDogNTJweDtcclxuYmFja2dyb3VuZDogI0VCNTkyNiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbmJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XHJcbmJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbm9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbkBtZWRpYShtaW4td2lkdGg6MzAwcHgpIGFuZCAobWF4LXdpZHRoOjYwMHB4KSB7XHJcbiAgLyogLm92ZXJpZGUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9ICovXHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMTY4cHgpe1xyXG4gIC5zaG9we1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMjBweDtcclxuICAgIGJvdHRvbTogM3B4O1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuXHJcbiAgfVxyXG5cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEwNTZweCl7XHJcbiAgLnNob3B7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAyMHB4O1xyXG4gICAgYm90dG9tOiAzcHg7XHJcbiAgICB3aWR0aDogMTQ1cHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG5cclxuICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjkyOHB4KXtcclxuICAuc2hvcHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDIwcHg7XHJcbiAgICBib3R0b206IC0xMHB4O1xyXG4gICAgd2lkdGg6IDEzMHB4O1xyXG4gIGhlaWdodDogMzVweDtcclxuXHJcbiAgfVxyXG4gIC5zaG9wIGRpdntcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250Om5vcm1hbCBub3JtYWwgYm9sZCAxOHB4IFNlZ29lIFVJO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgb3BhY2l0eTogMTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIGhlaWdodDogMjJweDtcclxuICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjY5N3B4KXtcclxuICAuc2hvcHtcclxuICBkaXNwbGF5OiBub25lO1xyXG5cclxuICB9XHJcblxyXG5cclxufVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-carousel',
                templateUrl: './carousel.component.html',
                styleUrls: ['./carousel.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Lmwb":
/*!***********************************************************************!*\
  !*** ./src/app/products/product-details/product-details.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_dist_all_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/dist/all.product.service */ "nT1d");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class ProductDetailsComponent {
    constructor(eventService, route) {
        this.eventService = eventService;
        this.route = route;
        this.quantity = 0;
        this.i = 0;
    }
    ngOnInit() {
        this.product = this.eventService.getProducts(+this.route.snapshot.params['id']);
    }
    plus() {
        if (this.i != 10) {
            this.i++;
            this.quantity = this.i;
        }
    }
    minus() {
        if (this.i != 0) {
            this.i--;
            this.quantity = this.i;
        }
    }
}
ProductDetailsComponent.ɵfac = function ProductDetailsComponent_Factory(t) { return new (t || ProductDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_dist_all_product_service__WEBPACK_IMPORTED_MODULE_1__["AllProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
ProductDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductDetailsComponent, selectors: [["ng-component"]], decls: 44, vars: 9, consts: [[1, "product__details"], [1, "container"], [1, "row"], [1, "col-sm-5", "col-md-5"], [1, "image__container"], [3, "src", "alt"], [1, "col-sm-7", "col-md-7", "product_detail"], [1, "product_details_content"], [1, "product__details_name"], [1, "product__details_desc"], [1, "product__details_group_items"], [1, "product__details_price"], [1, "product__details_color"], [1, "color"], [1, "color_black"], [1, "color_orange"], [1, "color__"], [1, "product__details_quantity"], ["type", "button", 1, "quantity__btn", 3, "click"], [1, "fa", "fa-minus"], ["type", "text", 2, "outline", "0", "width", "5%", "border", "0", 3, "value"], [1, "fa", "fa-plus"], [1, "product__details_button"], [1, "product__details_button_buy"]], template: function ProductDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Color:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Quanity:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailsComponent_Template_button_click_34_listener() { return ctx.minus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailsComponent_Template_button_click_37_listener() { return ctx.plus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Buy Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.product == null ? null : ctx.product.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.product == null ? null : ctx.product.productName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product == null ? null : ctx.product.productName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product == null ? null : ctx.product.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product == null ? null : ctx.product.productOrders);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product == null ? null : ctx.product.productReviews);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product == null ? null : ctx.product.starRating);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20A6", ctx.product == null ? null : ctx.product.price, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.quantity);
    } }, styles: [".product__details[_ngcontent-%COMP%] {\r\n    background: #FFFFFF 0% 0% no-repeat padding-box; \r\n    width: 100%;\r\n    height: 100%;\r\n    \r\n    padding: 3rem 0;\r\n}\r\n.image__container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n.product__details[_ngcontent-%COMP%]   .product_details_content[_ngcontent-%COMP%]{\r\n    background-color: #F2F2F2;\r\n    border-radius: 15px;\r\n    width: 100%;\r\n    height: 100%;\r\n    color: #101010;\r\n    padding: 2.5rem;\r\n}\r\n.product__details[_ngcontent-%COMP%]   .product_details_content[_ngcontent-%COMP%]   .product__details_desc[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    font-size: 15px;\r\n    padding-top: .5rem;\r\n}\r\n.product__details_group_items[_ngcontent-%COMP%] {\r\n    padding-top: .5rem;\r\n}\r\n.product__details_price[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    padding-top: 1rem;\r\n    font-weight: 700;\r\n}\r\n.product__details_color[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .product__details_quantity[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    padding-top: .6rem;\r\n    font-size: 22px;\r\n}\r\n.product__details_button[_ngcontent-%COMP%] {\r\n    margin-top: 5rem;\r\n}\r\n.product__details_button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    width: 30%;\r\n    background: #EB5926;\r\n    color: #fff;\r\n    border-radius: 15px;\r\n    padding: 8px;\r\n    border: 1px solid #EB5926;\r\n    box-shadow: 0px 0px 3px 1px rgb(167, 158, 158);\r\n    cursor: pointer;\r\n    outline: 0;\r\n}\r\n.product__details_quantity[_ngcontent-%COMP%]   .quantity__btn[_ngcontent-%COMP%]{\r\n    border-radius: 50%;\r\n    outline: 0;\r\n    background: #E1E1E1 0% 0% no-repeat padding-box;\r\n    color: #101010;\r\n    padding: 2px;\r\n    margin: 5px;\r\n    border: 1px solid #E1E1E1;\r\n\r\n}\r\n.product__details_quantity[_ngcontent-%COMP%]   .quantity__btn[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    padding: 3px;\r\n}\r\n.product__details_color[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    padding: 15px;\r\n    border: 0;\r\n    margin: 7px;\r\n    outline: 0;\r\n}\r\n.color[_ngcontent-%COMP%] {\r\n    background: #2A4B6E 0% 0% no-repeat padding-box;\r\n}\r\n.color_black[_ngcontent-%COMP%] {\r\n   background:#2D2D2D 0% 0% no-repeat padding-box;\r\n}\r\n.color_orange[_ngcontent-%COMP%] {\r\n    background:#FFB451 0% 0% no-repeat padding-box;\r\n}\r\n.color__[_ngcontent-%COMP%] {\r\n    background: #E363F2 0% 0% no-repeat padding-box\r\n}\r\n.product__details_button_buy[_ngcontent-%COMP%] {\r\n    margin-left: 1rem;\r\n    background: #F2F2F2 !important;\r\n    color: #EB5926 !important;\r\n}\r\n@media (max-width: 540px) {\r\n    .image__container[_ngcontent-%COMP%] {\r\n        margin: 1rem;\r\n    }\r\n    .image__container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        \r\n    }\r\n    .product__details[_ngcontent-%COMP%] {\r\n        padding: 0;\r\n    \r\n    }\r\n    .product__details[_ngcontent-%COMP%]   .product_details_content[_ngcontent-%COMP%] {\r\n        padding: 1.5rem;\r\n        \r\n    } \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksK0NBQStDO0lBQy9DLFdBQVc7SUFDWCxZQUFZO0lBQ1osK0JBQStCO0lBQy9CLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7SUFDZCxlQUFlO0FBQ25CO0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6Qiw4Q0FBOEM7SUFDOUMsZUFBZTtJQUNmLFVBQVU7QUFDZDtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDViwrQ0FBK0M7SUFDL0MsY0FBYztJQUNkLFlBQVk7SUFDWixXQUFXO0lBQ1gseUJBQXlCOztBQUU3QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsV0FBVztJQUNYLFVBQVU7QUFDZDtBQUNBO0lBQ0ksK0NBQStDO0FBQ25EO0FBRUE7R0FDRyw4Q0FBOEM7QUFDakQ7QUFFQTtJQUNJLDhDQUE4QztBQUNsRDtBQUVBO0lBQ0k7QUFDSjtBQUdBO0lBQ0ksaUJBQWlCO0lBQ2pCLDhCQUE4QjtJQUM5Qix5QkFBeUI7QUFDN0I7QUFJQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtJQUNBOztJQUVBO0lBQ0E7UUFDSSxVQUFVOztJQUVkO0lBQ0E7UUFDSSxlQUFlOztJQUVuQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3RfX2RldGFpbHMge1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7IFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwOyAqL1xyXG4gICAgcGFkZGluZzogM3JlbSAwO1xyXG59XHJcbi5pbWFnZV9fY29udGFpbmVyIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnByb2R1Y3RfX2RldGFpbHMgLnByb2R1Y3RfZGV0YWlsc19jb250ZW50e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGNvbG9yOiAjMTAxMDEwO1xyXG4gICAgcGFkZGluZzogMi41cmVtO1xyXG59XHJcblxyXG4ucHJvZHVjdF9fZGV0YWlscyAucHJvZHVjdF9kZXRhaWxzX2NvbnRlbnQgLnByb2R1Y3RfX2RldGFpbHNfZGVzYyBoMyB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogLjVyZW07XHJcbn1cclxuXHJcbi5wcm9kdWN0X19kZXRhaWxzX2dyb3VwX2l0ZW1zIHtcclxuICAgIHBhZGRpbmctdG9wOiAuNXJlbTtcclxufVxyXG5cclxuLnByb2R1Y3RfX2RldGFpbHNfcHJpY2UgaDMge1xyXG4gICAgcGFkZGluZy10b3A6IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4ucHJvZHVjdF9fZGV0YWlsc19jb2xvciBoMyxcclxuLnByb2R1Y3RfX2RldGFpbHNfcXVhbnRpdHkgaDN7XHJcbiAgICBwYWRkaW5nLXRvcDogLjZyZW07XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuXHJcbi5wcm9kdWN0X19kZXRhaWxzX2J1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xyXG59XHJcbi5wcm9kdWN0X19kZXRhaWxzX2J1dHRvbiBidXR0b24ge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGJhY2tncm91bmQ6ICNFQjU5MjY7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRUI1OTI2O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggMXB4IHJnYigxNjcsIDE1OCwgMTU4KTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG91dGxpbmU6IDA7XHJcbn1cclxuXHJcbi5wcm9kdWN0X19kZXRhaWxzX3F1YW50aXR5ICAucXVhbnRpdHlfX2J0bntcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRTFFMUUxIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIGNvbG9yOiAjMTAxMDEwO1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRTFFMUUxO1xyXG5cclxufVxyXG4ucHJvZHVjdF9fZGV0YWlsc19xdWFudGl0eSAucXVhbnRpdHlfX2J0biAuZmEge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG59XHJcblxyXG4ucHJvZHVjdF9fZGV0YWlsc19jb2xvciAgYnV0dG9ue1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIG1hcmdpbjogN3B4O1xyXG4gICAgb3V0bGluZTogMDtcclxufVxyXG4uY29sb3Ige1xyXG4gICAgYmFja2dyb3VuZDogIzJBNEI2RSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbn1cclxuXHJcbi5jb2xvcl9ibGFjayB7XHJcbiAgIGJhY2tncm91bmQ6IzJEMkQyRCAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbn1cclxuXHJcbi5jb2xvcl9vcmFuZ2Uge1xyXG4gICAgYmFja2dyb3VuZDojRkZCNDUxIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxufVxyXG5cclxuLmNvbG9yX18ge1xyXG4gICAgYmFja2dyb3VuZDogI0UzNjNGMiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3hcclxufVxyXG5cclxuXHJcbi5wcm9kdWN0X19kZXRhaWxzX2J1dHRvbl9idXkge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjJGMkYyICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI0VCNTkyNiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NDBweCkge1xyXG4gICAgLmltYWdlX19jb250YWluZXIge1xyXG4gICAgICAgIG1hcmdpbjogMXJlbTtcclxuICAgIH1cclxuICAgIC5pbWFnZV9fY29udGFpbmVyIGltZyB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAucHJvZHVjdF9fZGV0YWlscyB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIFxyXG4gICAgfVxyXG4gICAgLnByb2R1Y3RfX2RldGFpbHMgLnByb2R1Y3RfZGV0YWlsc19jb250ZW50IHtcclxuICAgICAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgICAgICAgXHJcbiAgICB9IFxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: "./product-details.component.html",
                styleUrls: ['./product-details.component.css']
            }]
    }], function () { return [{ type: _shared_dist_all_product_service__WEBPACK_IMPORTED_MODULE_1__["AllProductService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "MApw":
/*!*****************************************!*\
  !*** ./src/app/user/email.validator.ts ***!
  \*****************************************/
/*! exports provided: EmailvalidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailvalidatorDirective", function() { return EmailvalidatorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class EmailvalidatorDirective {
    constructor() {
        this.validator = this.emailValidator();
    }
    validate(c) {
        return this.validator(c);
    }
    emailValidator() {
        return (control) => {
            if (control.value != null && control.value !== '') {
                let isValid = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/.test(control.value);
                if (isValid) {
                    return null;
                }
                else {
                    return {
                        emailvalidator: { valid: false }
                    };
                }
            }
            else {
                return null;
            }
        };
    }
}
EmailvalidatorDirective.ɵfac = function EmailvalidatorDirective_Factory(t) { return new (t || EmailvalidatorDirective)(); };
EmailvalidatorDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: EmailvalidatorDirective, selectors: [["", "appEmailvalidator", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
                useClass: EmailvalidatorDirective,
                multi: true
            }
        ])] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailvalidatorDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appEmailvalidator]',
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
                        useClass: EmailvalidatorDirective,
                        multi: true
                    }
                ]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "OqW6":
/*!*****************************************************************************!*\
  !*** ./src/app/products/product-details/product-router.activate.service.ts ***!
  \*****************************************************************************/
/*! exports provided: ProductRouterActivate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRouterActivate", function() { return ProductRouterActivate; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_dist_all_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/dist/all.product.service */ "nT1d");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class ProductRouterActivate {
    constructor(eventservice, router) {
        this.eventservice = eventservice;
        this.router = router;
    }
    canActivate(route) {
        const eventExist = !!this.eventservice.getProducts(+route.params['id']);
        if (!eventExist) {
            this.router.navigate(['**']);
        }
        else {
            return eventExist;
        }
    }
}
ProductRouterActivate.ɵfac = function ProductRouterActivate_Factory(t) { return new (t || ProductRouterActivate)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_dist_all_product_service__WEBPACK_IMPORTED_MODULE_1__["AllProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ProductRouterActivate.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductRouterActivate, factory: ProductRouterActivate.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductRouterActivate, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _shared_dist_all_product_service__WEBPACK_IMPORTED_MODULE_1__["AllProductService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "SkYw":
/*!**************************************!*\
  !*** ./src/app/user/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AuthService {
    constructor() { }
    login() {
        this.currentUser = {
            firstname: '',
            lastname: '',
            password: "",
            confirmPassword: '',
            email: "",
            phone: null
        };
    }
    logout() {
    }
    isLoggedIn() {
        return !!this.currentUser;
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-nav/main-nav.component */ "7Ufg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");






class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-main-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_2__["MainNavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: [".header[_ngcontent-%COMP%] {\r\n    background-color: azure;\r\n    color: #333;\r\n    box-shadow: 0px 2px 3px 0px rgba(0,0,0,1);\r\n    padding: 2rem;\r\n    margin-top: 2rem;\r\n    width: 50%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLHlDQUF5QztJQUN6QyxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAzcHggMHB4IHJnYmEoMCwwLDAsMSk7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "Tq5s":
/*!****************************************************!*\
  !*** ./src/app/products/shared/samsung.service.ts ***!
  \****************************************************/
/*! exports provided: SamsungProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SamsungProduct", function() { return SamsungProduct; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SamsungProduct {
    constructor() { }
    samRecomProducts() {
        return RECOMMENDED;
    }
}
SamsungProduct.ɵfac = function SamsungProduct_Factory(t) { return new (t || SamsungProduct)(); };
SamsungProduct.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SamsungProduct, factory: SamsungProduct.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SamsungProduct, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
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
];


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes */ "a4+m");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./carousel/carousel.component */ "EfPX");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./products/products.component */ "ziXE");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./error/error.component */ "CG0s");
/* harmony import */ var _products_shared_product_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./products/shared/product.service */ "9UTf");
/* harmony import */ var _products_list_product_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./products/list/product.list */ "/hQp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _user_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user/auth.service */ "SkYw");
/* harmony import */ var _products_top_top_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./products/top/top.component */ "8xIo");
/* harmony import */ var _products_recommend_recommend_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./products/recommend/recommend.component */ "ZtiI");
/* harmony import */ var _products_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./products/product-details/product-details.component */ "Lmwb");
/* harmony import */ var _products_product_details_product_router_activate_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./products/product-details/product-router.activate.service */ "OqW6");
/* harmony import */ var _products_shared_dist_all_product_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./products/shared/dist/all.product.service */ "nT1d");
/* harmony import */ var _products_recommend_recommended_samsung_componet__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./products/recommend/recommended.samsung.componet */ "uyMs");
/* harmony import */ var _products_shared_samsung_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./products/shared/samsung.service */ "Tq5s");
/* harmony import */ var _user_email_validator__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./user/email.validator */ "MApw");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./main-nav/main-nav.component */ "7Ufg");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/list */ "MutI");

































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _products_shared_product_service__WEBPACK_IMPORTED_MODULE_11__["ProductService"],
        _products_shared_dist_all_product_service__WEBPACK_IMPORTED_MODULE_19__["AllProductService"],
        _user_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"],
        _products_product_details_product_router_activate_service__WEBPACK_IMPORTED_MODULE_18__["ProductRouterActivate"],
        _products_shared_samsung_service__WEBPACK_IMPORTED_MODULE_21__["SamsungProduct"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_5__["appRoutes"]),
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__["BrowserAnimationsModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_25__["LayoutModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_27__["MatButtonModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__["MatSidenavModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__["MatIconModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_30__["MatListModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_8__["CarouselComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
        _products_products_component__WEBPACK_IMPORTED_MODULE_9__["ProductsComponent"],
        _error_error_component__WEBPACK_IMPORTED_MODULE_10__["ErrorComponent"],
        _products_list_product_list__WEBPACK_IMPORTED_MODULE_12__["ProductsListComponent"],
        _products_top_top_component__WEBPACK_IMPORTED_MODULE_15__["TopComponent"],
        _products_recommend_recommend_component__WEBPACK_IMPORTED_MODULE_16__["RecommendedComponent"],
        _products_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_17__["ProductDetailsComponent"],
        _products_recommend_recommended_samsung_componet__WEBPACK_IMPORTED_MODULE_20__["SamsungRecommendedComponent"],
        _user_email_validator__WEBPACK_IMPORTED_MODULE_22__["EmailvalidatorDirective"],
        _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_24__["MainNavComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__["BrowserAnimationsModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_25__["LayoutModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_27__["MatButtonModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__["MatSidenavModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_30__["MatListModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_8__["CarouselComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                    _products_products_component__WEBPACK_IMPORTED_MODULE_9__["ProductsComponent"],
                    _error_error_component__WEBPACK_IMPORTED_MODULE_10__["ErrorComponent"],
                    _products_list_product_list__WEBPACK_IMPORTED_MODULE_12__["ProductsListComponent"],
                    _products_top_top_component__WEBPACK_IMPORTED_MODULE_15__["TopComponent"],
                    _products_recommend_recommend_component__WEBPACK_IMPORTED_MODULE_16__["RecommendedComponent"],
                    _products_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_17__["ProductDetailsComponent"],
                    _products_recommend_recommended_samsung_componet__WEBPACK_IMPORTED_MODULE_20__["SamsungRecommendedComponent"],
                    _user_email_validator__WEBPACK_IMPORTED_MODULE_22__["EmailvalidatorDirective"],
                    _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_24__["MainNavComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_5__["appRoutes"]),
                    _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__["BrowserAnimationsModule"],
                    _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_25__["LayoutModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__["MatToolbarModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_27__["MatButtonModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__["MatSidenavModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__["MatIconModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_30__["MatListModule"]
                ],
                providers: [
                    _products_shared_product_service__WEBPACK_IMPORTED_MODULE_11__["ProductService"],
                    _products_shared_dist_all_product_service__WEBPACK_IMPORTED_MODULE_19__["AllProductService"],
                    _user_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"],
                    _products_product_details_product_router_activate_service__WEBPACK_IMPORTED_MODULE_18__["ProductRouterActivate"],
                    _products_shared_samsung_service__WEBPACK_IMPORTED_MODULE_21__["SamsungProduct"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZtiI":
/*!***********************************************************!*\
  !*** ./src/app/products/recommend/recommend.component.ts ***!
  \***********************************************************/
/*! exports provided: RecommendedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendedComponent", function() { return RecommendedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function (a1) { return ["/products", a1]; };
class RecommendedComponent {
    constructor() { }
    ngOnInit() {
    }
}
RecommendedComponent.ɵfac = function RecommendedComponent_Factory(t) { return new (t || RecommendedComponent)(); };
RecommendedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecommendedComponent, selectors: [["app-recommend"]], inputs: { recommend: "recommend" }, decls: 12, vars: 6, consts: [[3, "routerLink"], [1, "product_list_card"], [1, "recommend_product"], ["alt", "", "srcset", "", 3, "src"], [1, "product_details"], [1, "product_name"], [1, "product_price"]], template: function RecommendedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.recommend.id));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.recommend.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.recommend.productName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20A6", ctx.recommend.price, "");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".recommend_collection[_ngcontent-%COMP%] {\r\n  background: #FEFEFE 0% 0% no-repeat padding-box;\r\n  border: 1px solid #707070; \r\n  border-radius: 15px;\r\n  opacity: .95;\r\n  margin: 2rem;\r\n  padding-top: 3rem;\r\n  padding-bottom: 1rem; \r\n  overflow: hidden;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n}\r\n.recommend_product[_ngcontent-%COMP%] {\r\n    margin: 0.5rem 0;\r\n}\r\n.product__product_image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    margin-top: 2.5rem;\r\n    margin-bottom: 1.5rem;\r\n    width: 100%;\r\n    height: 100% !important;\r\n}\r\n@media (max-width:540px) {\r\n  .recommend_collection[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvcmVjb21tZW5kL3JlY29tbWVuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0NBQStDO0VBQy9DLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQiwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtBQUNwQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCx1QkFBdUI7QUFDM0I7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0cy9yZWNvbW1lbmQvcmVjb21tZW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVjb21tZW5kX2NvbGxlY3Rpb24ge1xyXG4gIGJhY2tncm91bmQ6ICNGRUZFRkUgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7IFxyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgb3BhY2l0eTogLjk1O1xyXG4gIG1hcmdpbjogMnJlbTtcclxuICBwYWRkaW5nLXRvcDogM3JlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTsgXHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbn1cclxuLnJlY29tbWVuZF9wcm9kdWN0IHtcclxuICAgIG1hcmdpbjogMC41cmVtIDA7XHJcbn1cclxuXHJcbi5wcm9kdWN0X19wcm9kdWN0X2ltYWdlICBpbWcge1xyXG4gICAgbWFyZ2luLXRvcDogMi41cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6NTQwcHgpIHtcclxuICAucmVjb21tZW5kX2NvbGxlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuIl19 */", ".top_collection[_ngcontent-%COMP%]{\r\n  background: #FEFEFE 0% 0% no-repeat padding-box;\r\n  border: 1px solid #707070; \r\n  border-radius: 15px;\r\n  opacity: .95;\r\n  margin: 2rem;\r\n  padding-top: 3rem;\r\n  padding-bottom: 1rem; \r\n  overflow: hidden;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n\r\n}\r\n\r\n.top__collection_header[_ngcontent-%COMP%] {\r\n  letter-spacing: 0px;\r\n  color: #101010;\r\n  font: normal normal 900 29px/39px Segoe UI;\r\n  letter-spacing: 0px;\r\n  color: #101010;\r\n  text-align: center;\r\n \r\n}\r\n\r\n.product_list_card[_ngcontent-%COMP%] {\r\n  background: transparent;\r\n  width: 100%;\r\n  height: 100%;\r\n  border: 1px solid #fff;\r\n  border-radius: 7px;\r\n  opacity: 1;\r\n  cursor: pointer;\r\n}\r\n\r\n.product_list_card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n.product_details[_ngcontent-%COMP%] {\r\n  background: #B9B9B9 0% 0% no-repeat padding-box;\r\n  border-radius: 0px 0px 7px 7px;\r\n  box-shadow: 1px 1px 2px 1px rgba(0,0,0,.4);\r\n  width: 100%;\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n}\r\n\r\n.product_name[_ngcontent-%COMP%], .product_price[_ngcontent-%COMP%] {\r\n  margin-left: 1rem;\r\n}\r\n\r\n.product_name[_ngcontent-%COMP%] {\r\n  padding: .1rem;\r\n  font-weight: 400;\r\n  font-size: 12px;\r\n}\r\n\r\n.product_price[_ngcontent-%COMP%] {\r\n  font-weight: 900;\r\n  font-size: large;\r\n  color: #101010;\r\n  opacity: 1;\r\n  padding: .1rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvdG9wL3RvcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0NBQStDO0VBQy9DLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQiwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjs7QUFFcEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLDBDQUEwQztFQUMxQyxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGtCQUFrQjs7QUFFcEI7O0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsK0NBQStDO0VBQy9DLDhCQUE4QjtFQUM5QiwwQ0FBMEM7RUFDMUMsV0FBVztFQUNYLDJCQUFtQjtFQUFuQix3QkFBbUI7RUFBbkIsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFVBQVU7RUFDVixjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvdG9wL3RvcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcF9jb2xsZWN0aW9ue1xyXG4gIGJhY2tncm91bmQ6ICNGRUZFRkUgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7IFxyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgb3BhY2l0eTogLjk1O1xyXG4gIG1hcmdpbjogMnJlbTtcclxuICBwYWRkaW5nLXRvcDogM3JlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTsgXHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcblxyXG59XHJcblxyXG4udG9wX19jb2xsZWN0aW9uX2hlYWRlciB7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICBjb2xvcjogIzEwMTAxMDtcclxuICBmb250OiBub3JtYWwgbm9ybWFsIDkwMCAyOXB4LzM5cHggU2Vnb2UgVUk7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICBjb2xvcjogIzEwMTAxMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiBcclxufVxyXG4ucHJvZHVjdF9saXN0X2NhcmQge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnByb2R1Y3RfbGlzdF9jYXJkIGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5wcm9kdWN0X2RldGFpbHMge1xyXG4gIGJhY2tncm91bmQ6ICNCOUI5QjkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggN3B4IDdweDtcclxuICBib3gtc2hhZG93OiAxcHggMXB4IDJweCAxcHggcmdiYSgwLDAsMCwuNCk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxufVxyXG5cclxuLnByb2R1Y3RfbmFtZSxcclxuLnByb2R1Y3RfcHJpY2Uge1xyXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG59XHJcblxyXG4ucHJvZHVjdF9uYW1lIHtcclxuICBwYWRkaW5nOiAuMXJlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLnByb2R1Y3RfcHJpY2Uge1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICBjb2xvcjogIzEwMTAxMDtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHBhZGRpbmc6IC4xcmVtO1xyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecommendedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-recommend',
                template: `
  <div [routerLink]="['/products', recommend.id]">
  <div class="product_list_card">
  <div class="recommend_product"><img src="{{recommend.imageUrl}}" alt="" srcset=""></div>
   <div class="product_details">
     <div class="product_name">
       <span>{{recommend.productName}}</span>
     </div>
     <div class="product_price">
       <span>₦{{recommend.price}}</span>
     </div>
   </div>
 </div>
 
 <div>
`,
                styleUrls: ['./recommend.component.css', '../top/top.component.css']
            }]
    }], function () { return []; }, { recommend: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "a4+m":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products/products.component */ "ziXE");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error/error.component */ "CG0s");
/* harmony import */ var _products_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products/product-details/product-details.component */ "Lmwb");



const appRoutes = [
    { path: 'products', component: _products_products_component__WEBPACK_IMPORTED_MODULE_0__["ProductsComponent"] },
    { path: 'user', loadChildren: () => Promise.all(/*! import() | user-user-module */[__webpack_require__.e("common"), __webpack_require__.e("user-user-module")]).then(__webpack_require__.bind(null, /*! ./user/user.module */ "7UCR")).then(m => m.UserModule) },
    { path: 'admin', loadChildren: () => Promise.all(/*! import() | admin-admin-module */[__webpack_require__.e("common"), __webpack_require__.e("admin-admin-module")]).then(__webpack_require__.bind(null, /*! ./admin/admin.module */ "jkDv")).then(m => m.AdminModule) },
    { path: 'products/:id', component: _products_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_2__["ProductDetailsComponent"] },
    { path: '', redirectTo: '/products', pathMatch: 'full' },
    { path: '**', component: _error_error_component__WEBPACK_IMPORTED_MODULE_1__["ErrorComponent"] },
];
//canActivate: [ProductRouterActivate]


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 53, vars: 0, consts: [[1, "footer_style", "recommend_collection"], [1, "container-sm"], [1, "row"], [1, "col-sm-6", "col-md-6"], [1, "footer__header_container"], [1, "footer__header"], [1, "footer_form-control"], [1, "footer__form_element"], [1, "form__input"], ["id", "email", "type", "email", "placeholder", "Email Address"], [1, "form__socia_media"], [1, "footer__social_header"], [1, "footer__icon"], [1, "footer_icon_facebook"], ["src", "../../assets//socials//facebook.svg"], [1, "footer_icon_instagram"], ["src", "../../assets//socials//instagram.svg"], [1, "footer_icon_twitter"], ["src", "../../assets//socials//twitter-sign.svg"], [1, "col-sm-3", "col-md-3"], [1, "footer__content"], [1, "footer__content_list"], [1, "footer__content_term"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Get the lastest news from us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Subscribe to our Newsletter to stay updated on our newest products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Follow Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ul", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Values");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Our Story");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "ul", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Help Center");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Delivery Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Report a Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Terms and Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]], styles: [".footer_style[_ngcontent-%COMP%] {\r\n   background: #1D1D1D;\r\n   border-radius: 15px 15px 0px 0px;\r\n   max-width: 100%;\r\n   height: -webkit-min-content;\r\n   height: min-content;\r\n   overflow: hidden;\r\n   margin: 0 2rem;\r\n}\r\n\r\n.footer__header_container[_ngcontent-%COMP%], .footer__content[_ngcontent-%COMP%] {\r\n   padding-top: 4rem;\r\n}\r\n\r\n.footer__header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    color: #EB5926;\r\n    text-transform: uppercase;\r\n    margin-top: 1rem;\r\n    font-size: 1.5rem;\r\n    font-weight: bold;\r\n}\r\n\r\n.footer__content_list[_ngcontent-%COMP%], .footer__content_term[_ngcontent-%COMP%] {\r\n    list-style-type: none;\r\n}\r\n\r\n.footer__content_list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .footer__content_term[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    color: #FFFFFF;\r\n    margin: .8rem;\r\n    padding: 0.4rem 0;\r\n}\r\n\r\n.footer_form-control[_ngcontent-%COMP%] {\r\n   color: #FFFFFF;\r\n   margin-top: 2.2rem;\r\n}\r\n\r\n.footer_form-control[_ngcontent-%COMP%]   .footer__form_element[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0.5rem 0;\r\n}\r\n\r\n.form__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    background: #ECECEC 0% 0% no-repeat padding-box;\r\n    border-radius: 8px;\r\n    width: 80%;\r\n    height: 35px;\r\n    padding: 0.2rem 0.3rem;\r\n    border: 1px solid #333;\r\n    outline: 0;\r\n}\r\n\r\n.form__input[_ngcontent-%COMP%]   input[type=\"email\"][_ngcontent-%COMP%] {\r\n    padding-left: 20px;    \r\n}\r\n\r\n.form__input[_ngcontent-%COMP%]   input[type=\"email\"][_ngcontent-%COMP%]:focus {\r\n    border-color: #EB5926;\r\n    box-shadow: 0 0 8px 0 #EB5926;\r\n    outline: none;\r\n}\r\n\r\n.form__input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 2.5rem;\r\n    width: 102px;\r\n    height: 34px;\r\n    background: #EB5926;\r\n    color: #fff;\r\n    padding: 8px;\r\n    border-radius: 10px;\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.form__socia_media[_ngcontent-%COMP%] {\r\n    color: #FFFFFF;\r\n    margin-top: 2rem;\r\n}\r\n\r\n.footer__social_header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding-top: 12px;\r\n    position: absolute;\r\n}\r\n\r\n.footer__icon[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding-right: 12rem;\r\n    \r\n    \r\n}\r\n\r\n.footer__icon[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 30px;\r\n}\r\n\r\n.footer__icon[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    margin: 0.5rem;\r\n    cursor: pointer;\r\n    padding-bottom: 1rem;\r\n}\r\n\r\nli.footer_icon_facebook[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    \r\n    \r\n}\r\n\r\n\r\n\r\n@media (max-width:540px) {\r\n    .footer_style[_ngcontent-%COMP%] {\r\n        display: block;\r\n        text-align: center; \r\n        margin-top: 24rem;  \r\n    }\r\n    .footer__header_container[_ngcontent-%COMP%], .footer__content[_ngcontent-%COMP%] {\r\n        padding-top: 1.5rem;\r\n        margin: 0 auto;\r\n    }\r\n\r\n    .footer__content_term[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .footer__content_list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n        margin: 0;\r\n    }\r\n\r\n    .footer__icon[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n        padding: 2.5rem 0 0;\r\n    }\r\n\r\n    .footer__social_header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n       right: 42%;\r\n    }\r\n\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .footer__header_container[_ngcontent-%COMP%], .footer__content[_ngcontent-%COMP%] {\r\n        padding-top: 2rem;\r\n    }\r\n    .footer__header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n        margin: 0;\r\n        padding-top: 1.5rem;\r\n        font-size: 1rem;\r\n    }\r\n    .footer__form_element[_ngcontent-%COMP%] {\r\n        padding-bottom: 1.5rem;\r\n    }\r\n    .footer__icon[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n        padding-right: 2.5rem;\r\n    }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0dBQ0csbUJBQW1CO0dBQ25CLGdDQUFnQztHQUNoQyxlQUFlO0dBQ2YsMkJBQW1CO0dBQW5CLG1CQUFtQjtHQUNuQixnQkFBZ0I7R0FDaEIsY0FBYztBQUNqQjs7QUFFQTs7R0FFRyxpQkFBaUI7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLHFCQUFxQjtBQUN6Qjs7QUFFQTs7SUFFSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQTtHQUNHLGNBQWM7R0FDZCxrQkFBa0I7QUFDckI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksK0NBQStDO0lBQy9DLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDZCQUE2QjtJQUM3QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQjt1QkFDbUI7O0FBRXZCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUdBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysb0JBQW9CO0FBQ3hCOztBQUdBO0lBQ0k7b0JBQ2dCOztBQUVwQjs7QUFDQTs7Ozs7Ozs7O0dBU0c7O0FBRUg7SUFDSTtRQUNJLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxtQkFBbUI7UUFDbkIsY0FBYztJQUNsQjs7SUFFQTs7UUFFSSxTQUFTO0lBQ2I7O0lBRUE7UUFDSSxtQkFBbUI7SUFDdkI7O0lBRUE7T0FDRyxVQUFVO0lBQ2I7O0FBRUo7O0FBRUE7SUFDSTs7UUFFSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLFNBQVM7UUFDVCxtQkFBbUI7UUFDbkIsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSxxQkFBcUI7SUFDekI7O0FBRUoiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyX3N0eWxlIHtcclxuICAgYmFja2dyb3VuZDogIzFEMUQxRDtcclxuICAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDBweCAwcHg7XHJcbiAgIG1heC13aWR0aDogMTAwJTtcclxuICAgaGVpZ2h0OiBtaW4tY29udGVudDtcclxuICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgbWFyZ2luOiAwIDJyZW07XHJcbn1cclxuXHJcbi5mb290ZXJfX2hlYWRlcl9jb250YWluZXIsXHJcbi5mb290ZXJfX2NvbnRlbnQge1xyXG4gICBwYWRkaW5nLXRvcDogNHJlbTtcclxufVxyXG5cclxuLmZvb3Rlcl9faGVhZGVyIGgyIHtcclxuICAgIGNvbG9yOiAjRUI1OTI2O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZm9vdGVyX19jb250ZW50X2xpc3QsXHJcbi5mb290ZXJfX2NvbnRlbnRfdGVybSB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuXHJcbi5mb290ZXJfX2NvbnRlbnRfbGlzdCBsaSxcclxuLmZvb3Rlcl9fY29udGVudF90ZXJtIGxpIHtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgbWFyZ2luOiAuOHJlbTtcclxuICAgIHBhZGRpbmc6IDAuNHJlbSAwO1xyXG59XHJcblxyXG4uZm9vdGVyX2Zvcm0tY29udHJvbCB7XHJcbiAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICBtYXJnaW4tdG9wOiAyLjJyZW07XHJcbn1cclxuXHJcbi5mb290ZXJfZm9ybS1jb250cm9sIC5mb290ZXJfX2Zvcm1fZWxlbWVudCBwIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAwO1xyXG59XHJcblxyXG4uZm9ybV9faW5wdXQgaW5wdXQge1xyXG4gICAgYmFja2dyb3VuZDogI0VDRUNFQyAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgcGFkZGluZzogMC4ycmVtIDAuM3JlbTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG59XHJcblxyXG4uZm9ybV9faW5wdXQgaW5wdXRbdHlwZT1cImVtYWlsXCJdIHtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDsgICAgXHJcbn1cclxuXHJcbi5mb3JtX19pbnB1dCBpbnB1dFt0eXBlPVwiZW1haWxcIl06Zm9jdXMge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjRUI1OTI2O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDhweCAwICNFQjU5MjY7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uZm9ybV9faW5wdXQgYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAyLjVyZW07XHJcbiAgICB3aWR0aDogMTAycHg7XHJcbiAgICBoZWlnaHQ6IDM0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRUI1OTI2O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZm9ybV9fc29jaWFfbWVkaWEge1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG59XHJcblxyXG4uZm9vdGVyX19zb2NpYWxfaGVhZGVyIHAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5mb290ZXJfX2ljb24gdWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEycmVtO1xyXG4gICAgLyogbGVmdDogN3JlbTtcclxuICAgIGJvdHRvbTogLS44NXJlbTsgICovXHJcbiAgICBcclxufVxyXG5cclxuLmZvb3Rlcl9faWNvbiBsaSBpbWcge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbn1cclxuXHJcblxyXG4uZm9vdGVyX19pY29uIGxpIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBtYXJnaW46IDAuNXJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG5cclxubGkuZm9vdGVyX2ljb25fZmFjZWJvb2sgaW1ne1xyXG4gICAgLyogbGVmdDogLTFyZW07XHJcbiAgICB0b3A6IC0zLjdyZW07ICAqL1xyXG4gICAgXHJcbn1cclxuLypcclxubGkuZm9vdGVyX2ljb25faW5zdGFncmFtIHtcclxuICAgIHJpZ2h0OiAtOC41cmVtO1xyXG4gICAgYm90dG9tOiAyLjVyZW07XHJcbn1cclxuXHJcbmxpLmZvb3Rlcl9pY29uX3R3aXR0ZXIge1xyXG4gICAgcmlnaHQ6IC0xMi41cmVtO1xyXG4gICAgYm90dG9tOiAyLjVyZW07XHJcbn0gKi9cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjU0MHB4KSB7XHJcbiAgICAuZm9vdGVyX3N0eWxlIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgICAgIG1hcmdpbi10b3A6IDI0cmVtOyAgXHJcbiAgICB9XHJcbiAgICAuZm9vdGVyX19oZWFkZXJfY29udGFpbmVyLCAuZm9vdGVyX19jb250ZW50IHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMS41cmVtO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5mb290ZXJfX2NvbnRlbnRfdGVybSBsaSxcclxuICAgIC5mb290ZXJfX2NvbnRlbnRfbGlzdCBsaSB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5mb290ZXJfX2ljb24gdWwge1xyXG4gICAgICAgIHBhZGRpbmc6IDIuNXJlbSAwIDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmZvb3Rlcl9fc29jaWFsX2hlYWRlciBwIHtcclxuICAgICAgIHJpZ2h0OiA0MiU7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC5mb290ZXJfX2hlYWRlcl9jb250YWluZXIsXHJcbiAgICAuZm9vdGVyX19jb250ZW50IHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMnJlbTtcclxuICAgIH1cclxuICAgIC5mb290ZXJfX2hlYWRlciBoMntcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEuNXJlbTtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB9XHJcbiAgICAuZm9vdGVyX19mb3JtX2VsZW1lbnQge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XHJcbiAgICB9XHJcbiAgICAuZm9vdGVyX19pY29uIHVsIHtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyLjVyZW07XHJcbiAgICB9XHJcblxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "kWWo":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user/auth.service */ "SkYw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






const _c0 = function () { return ["user/login"]; };
function NavbarComponent_a_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "SIGN IN ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
function NavbarComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function () { return ["user/register"]; };
function NavbarComponent_a_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "REGISTER");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
} }
class NavbarComponent {
    constructor(auth) {
        this.auth = auth;
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 21, vars: 3, consts: [[1, "container-fluid", "nav-padding"], [1, "navbar-t"], ["routerLink", "/products", 1, "nav-brand"], ["src", "assets/icons/logo.png", "alt", "", 1, "sm-2", "d-inline-block", "align-top", "margin-bottom"], [1, "form-inline", "center-sm"], [1, "input-group", "md-form", "form-sm", "form-1", "pl-0"], [1, "input-group-prepend"], ["id", "basic-text1", 1, "input-group-text"], ["src", "assets/icons/download.png", "alt", "", "srcset", "", 1, "icon"], ["type", "text", "placeholder", "Search for a product", "aria-label", "Search", 1, "form-control", "my-0", "py-1"], [1, ""], [1, "display-inline"], [1, "nav-left"], [3, "routerLink", 4, "ngIf"], ["class", "dropdown show", 4, "ngIf"], ["href", "#"], ["src", "assets/icons/icon.png", "alt", "", "srcset", "", 1, "sm"], [3, "routerLink"], [1, "dropdown", "show"], ["href", "#", "role", "button", "id", "dropdownMenuLink", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "dropdown-btn", "dropdown-toggle"], ["src", "assets/profile/profile.svg", "alt", "profile"], ["aria-labelledby", "dropdownMenuLink", 1, "dropdown-menu"], ["href", "#", 1, "dropdown-item"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NavbarComponent_a_13_Template, 2, 2, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NavbarComponent_div_14_Template, 8, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, NavbarComponent_a_16_Template, 2, 2, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.auth.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.auth.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.auth.isLoggedIn());
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".container-fluid[_ngcontent-%COMP%]{\r\n  background: #F2F2F2 0% 0% no-repeat padding-box;\r\n  height: 57px;\r\n  overflow: hidden;\r\n}\r\n\r\n.nav-padding[_ngcontent-%COMP%] {\r\n  padding: 0 3rem;\r\n}\r\n\r\n.icon[_ngcontent-%COMP%]{\r\n  width: 18px;\r\n  height: 18px;\r\n  background-color:white;\r\n\r\n}\r\n\r\n.display-inline[_ngcontent-%COMP%]{\r\n  display:flex;\r\n  list-style-type: none;\r\n  margin-left: 2em;\r\n  justify-content: center;\r\n}\r\n\r\n.input-group-text[_ngcontent-%COMP%]{\r\n  background: white;\r\n  height: 31px;\r\n  border-radius: 10px;\r\n  opacity: 1;\r\n}\r\n\r\n.input-group[_ngcontent-%COMP%]{\r\n  position:absolute;\r\n  right:25em;\r\n}\r\n\r\n.input-group-sm[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: stretch;\r\n  width: 100%;\r\n}\r\n\r\n.navbar-t[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%]{\r\n  background: #ECECEC;\r\n  height: 31px;\r\n}\r\n\r\n.nav-left[_ngcontent-%COMP%]{\r\n  margin: 1.2em 1em 0 1em;\r\n  height: 27px;\r\n  opacity: 1;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]{\r\n  height: 57px;\r\n  background: #E1E1E1 0% 0% no-repeat padding-box;\r\n  opacity:1\r\n}\r\n\r\n.navbar-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  \r\n  letter-spacing: 0px;\r\n  color: #101010;\r\n  opacity: 1;\r\n}\r\n\r\n.nav-left[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  color: #101010;\r\n  opacity: 1;\r\n  text-align: center;\r\n  margin-bottom: 1em;\r\n\r\n}\r\n\r\n.bg[_ngcontent-%COMP%]{\r\n  background-color: white;\r\n}\r\n\r\n.dropdown[_ngcontent-%COMP%]   .show.dropdown-menu[_ngcontent-%COMP%] {\r\n  position: fixed !important;\r\n  top: 28px !important;\r\n  left: 80rem !important;\r\n}\r\n\r\n@media (max-width:468px) {\r\n  .sm[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media screen and (max-width:600px){\r\n  .input-group[_ngcontent-%COMP%]{\r\n   display: none;\r\n  }\r\n  .nav-left[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media (max-width:768px) {\r\n  .py-1[_ngcontent-%COMP%] {\r\n    margin-right: -7rem;\r\n    margin-bottom: 1rem;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0NBQStDO0VBQy9DLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7O0FBRXhCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLCtDQUErQztFQUMvQztBQUNGOztBQUVBO0VBQ0UsOENBQThDO0VBQzlDLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsY0FBYztFQUNkLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsa0JBQWtCOztBQUVwQjs7QUFDQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixvQkFBb0I7RUFDcEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFDQTtFQUNFO0dBQ0MsYUFBYTtFQUNkO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsbUJBQW1CO0lBQ25CLG1CQUFtQjtFQUNyQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZHtcclxuICBiYWNrZ3JvdW5kOiAjRjJGMkYyIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICBoZWlnaHQ6IDU3cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLm5hdi1wYWRkaW5nIHtcclxuICBwYWRkaW5nOiAwIDNyZW07XHJcbn1cclxuXHJcbi5pY29ue1xyXG4gIHdpZHRoOiAxOHB4O1xyXG4gIGhlaWdodDogMThweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG5cclxufVxyXG5cclxuLmRpc3BsYXktaW5saW5le1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgbWFyZ2luLWxlZnQ6IDJlbTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmlucHV0LWdyb3VwLXRleHR7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgaGVpZ2h0OiAzMXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmlucHV0LWdyb3Vwe1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIHJpZ2h0OjI1ZW07XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cC1zbSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubmF2YmFyLXQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbHtcclxuICBiYWNrZ3JvdW5kOiAjRUNFQ0VDO1xyXG4gIGhlaWdodDogMzFweDtcclxufVxyXG5cclxuLm5hdi1sZWZ0e1xyXG4gIG1hcmdpbjogMS4yZW0gMWVtIDAgMWVtO1xyXG4gIGhlaWdodDogMjdweDtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4ubmF2YmFye1xyXG4gIGhlaWdodDogNTdweDtcclxuICBiYWNrZ3JvdW5kOiAjRTFFMUUxIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICBvcGFjaXR5OjFcclxufVxyXG5cclxuLm5hdmJhci1uYXYgYXtcclxuICAvKiBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAyMHB4IFNlZ29lIFVJOyAqL1xyXG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgY29sb3I6ICMxMDEwMTA7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLm5hdi1sZWZ0IGF7XHJcbiAgY29sb3I6ICMxMDEwMTA7XHJcbiAgb3BhY2l0eTogMTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG5cclxufVxyXG4uYmd7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5kcm9wZG93biAuc2hvdy5kcm9wZG93bi1tZW51IHtcclxuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcclxuICB0b3A6IDI4cHggIWltcG9ydGFudDtcclxuICBsZWZ0OiA4MHJlbSAhaW1wb3J0YW50O1xyXG59ICAgIFxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6NDY4cHgpIHtcclxuICAuc20ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MDBweCl7XHJcbiAgLmlucHV0LWdyb3Vwe1xyXG4gICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAubmF2LWxlZnR7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6NzY4cHgpIHtcclxuICAucHktMSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC03cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return [{ type: _user_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "mv7u":
/*!********************************************************!*\
  !*** ./src/app/products/shared/recommended.service.ts ***!
  \********************************************************/
/*! exports provided: RecommendedProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendedProduct", function() { return RecommendedProduct; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class RecommendedProduct {
    constructor() { }
    getRecomProducts() {
        return RECOMMENDED;
    }
    getProducts(id) {
        return RECOMMENDED.find(product_entry => product_entry.id === id);
    }
}
RecommendedProduct.ɵfac = function RecommendedProduct_Factory(t) { return new (t || RecommendedProduct)(); };
RecommendedProduct.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RecommendedProduct, factory: RecommendedProduct.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecommendedProduct, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
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
];


/***/ }),

/***/ "nT1d":
/*!*************************************************************!*\
  !*** ./src/app/products/shared/dist/all.product.service.ts ***!
  \*************************************************************/
/*! exports provided: AllProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllProductService", function() { return AllProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AllProductService {
    getProducts(id) {
        return PRODUCTS.find(product_entry => product_entry.id === id);
    }
}
AllProductService.ɵfac = function AllProductService_Factory(t) { return new (t || AllProductService)(); };
AllProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AllProductService, factory: AllProductService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllProductService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();
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
];


/***/ }),

/***/ "qmub":
/*!************************************************!*\
  !*** ./src/app/products/shared/top.service.ts ***!
  \************************************************/
/*! exports provided: TopService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopService", function() { return TopService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TopService {
    constructor() { }
    getTopCollections() {
        return TOPCOLLECTIONS;
    }
}
TopService.ɵfac = function TopService_Factory(t) { return new (t || TopService)(); };
TopService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TopService, factory: TopService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
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
];


/***/ }),

/***/ "uyMs":
/*!********************************************************************!*\
  !*** ./src/app/products/recommend/recommended.samsung.componet.ts ***!
  \********************************************************************/
/*! exports provided: SamsungRecommendedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SamsungRecommendedComponent", function() { return SamsungRecommendedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function (a1) { return ["/products", a1]; };
class SamsungRecommendedComponent {
    constructor() { }
    ngOnInit() {
    }
}
SamsungRecommendedComponent.ɵfac = function SamsungRecommendedComponent_Factory(t) { return new (t || SamsungRecommendedComponent)(); };
SamsungRecommendedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SamsungRecommendedComponent, selectors: [["app-samsung"]], inputs: { samsung: "samsung" }, decls: 10, vars: 6, consts: [[1, "product_list_card", 3, "routerLink"], [1, "recommend_product"], ["alt", "", "srcset", "", 3, "src"], [1, "product_details"], [1, "product_name"], [1, "product_price"]], template: function SamsungRecommendedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.samsung.id));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.samsung.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.samsung.productName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20A6", ctx.samsung.price, "");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".recommend_collection[_ngcontent-%COMP%] {\r\n  background: #FEFEFE 0% 0% no-repeat padding-box;\r\n  border: 1px solid #707070; \r\n  border-radius: 15px;\r\n  opacity: .95;\r\n  margin: 2rem;\r\n  padding-top: 3rem;\r\n  padding-bottom: 1rem; \r\n  overflow: hidden;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n}\r\n.recommend_product[_ngcontent-%COMP%] {\r\n    margin: 0.5rem 0;\r\n}\r\n.product__product_image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    margin-top: 2.5rem;\r\n    margin-bottom: 1.5rem;\r\n    width: 100%;\r\n    height: 100% !important;\r\n}\r\n@media (max-width:540px) {\r\n  .recommend_collection[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvcmVjb21tZW5kL3JlY29tbWVuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0NBQStDO0VBQy9DLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQiwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtBQUNwQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCx1QkFBdUI7QUFDM0I7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0cy9yZWNvbW1lbmQvcmVjb21tZW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVjb21tZW5kX2NvbGxlY3Rpb24ge1xyXG4gIGJhY2tncm91bmQ6ICNGRUZFRkUgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7IFxyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgb3BhY2l0eTogLjk1O1xyXG4gIG1hcmdpbjogMnJlbTtcclxuICBwYWRkaW5nLXRvcDogM3JlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTsgXHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbn1cclxuLnJlY29tbWVuZF9wcm9kdWN0IHtcclxuICAgIG1hcmdpbjogMC41cmVtIDA7XHJcbn1cclxuXHJcbi5wcm9kdWN0X19wcm9kdWN0X2ltYWdlICBpbWcge1xyXG4gICAgbWFyZ2luLXRvcDogMi41cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6NTQwcHgpIHtcclxuICAucmVjb21tZW5kX2NvbGxlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuIl19 */", ".top_collection[_ngcontent-%COMP%]{\r\n  background: #FEFEFE 0% 0% no-repeat padding-box;\r\n  border: 1px solid #707070; \r\n  border-radius: 15px;\r\n  opacity: .95;\r\n  margin: 2rem;\r\n  padding-top: 3rem;\r\n  padding-bottom: 1rem; \r\n  overflow: hidden;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n\r\n}\r\n\r\n.top__collection_header[_ngcontent-%COMP%] {\r\n  letter-spacing: 0px;\r\n  color: #101010;\r\n  font: normal normal 900 29px/39px Segoe UI;\r\n  letter-spacing: 0px;\r\n  color: #101010;\r\n  text-align: center;\r\n \r\n}\r\n\r\n.product_list_card[_ngcontent-%COMP%] {\r\n  background: transparent;\r\n  width: 100%;\r\n  height: 100%;\r\n  border: 1px solid #fff;\r\n  border-radius: 7px;\r\n  opacity: 1;\r\n  cursor: pointer;\r\n}\r\n\r\n.product_list_card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n.product_details[_ngcontent-%COMP%] {\r\n  background: #B9B9B9 0% 0% no-repeat padding-box;\r\n  border-radius: 0px 0px 7px 7px;\r\n  box-shadow: 1px 1px 2px 1px rgba(0,0,0,.4);\r\n  width: 100%;\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n}\r\n\r\n.product_name[_ngcontent-%COMP%], .product_price[_ngcontent-%COMP%] {\r\n  margin-left: 1rem;\r\n}\r\n\r\n.product_name[_ngcontent-%COMP%] {\r\n  padding: .1rem;\r\n  font-weight: 400;\r\n  font-size: 12px;\r\n}\r\n\r\n.product_price[_ngcontent-%COMP%] {\r\n  font-weight: 900;\r\n  font-size: large;\r\n  color: #101010;\r\n  opacity: 1;\r\n  padding: .1rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvdG9wL3RvcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0NBQStDO0VBQy9DLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQiwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjs7QUFFcEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLDBDQUEwQztFQUMxQyxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGtCQUFrQjs7QUFFcEI7O0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsK0NBQStDO0VBQy9DLDhCQUE4QjtFQUM5QiwwQ0FBMEM7RUFDMUMsV0FBVztFQUNYLDJCQUFtQjtFQUFuQix3QkFBbUI7RUFBbkIsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFVBQVU7RUFDVixjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvdG9wL3RvcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcF9jb2xsZWN0aW9ue1xyXG4gIGJhY2tncm91bmQ6ICNGRUZFRkUgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7IFxyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgb3BhY2l0eTogLjk1O1xyXG4gIG1hcmdpbjogMnJlbTtcclxuICBwYWRkaW5nLXRvcDogM3JlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTsgXHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcblxyXG59XHJcblxyXG4udG9wX19jb2xsZWN0aW9uX2hlYWRlciB7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICBjb2xvcjogIzEwMTAxMDtcclxuICBmb250OiBub3JtYWwgbm9ybWFsIDkwMCAyOXB4LzM5cHggU2Vnb2UgVUk7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICBjb2xvcjogIzEwMTAxMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiBcclxufVxyXG4ucHJvZHVjdF9saXN0X2NhcmQge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnByb2R1Y3RfbGlzdF9jYXJkIGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5wcm9kdWN0X2RldGFpbHMge1xyXG4gIGJhY2tncm91bmQ6ICNCOUI5QjkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggN3B4IDdweDtcclxuICBib3gtc2hhZG93OiAxcHggMXB4IDJweCAxcHggcmdiYSgwLDAsMCwuNCk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxufVxyXG5cclxuLnByb2R1Y3RfbmFtZSxcclxuLnByb2R1Y3RfcHJpY2Uge1xyXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG59XHJcblxyXG4ucHJvZHVjdF9uYW1lIHtcclxuICBwYWRkaW5nOiAuMXJlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLnByb2R1Y3RfcHJpY2Uge1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICBjb2xvcjogIzEwMTAxMDtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHBhZGRpbmc6IC4xcmVtO1xyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SamsungRecommendedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-samsung',
                template: `
  <div class="product_list_card" [routerLink]="['/products', samsung.id]">
     <div class="recommend_product"><img src="{{samsung.imageUrl}}" alt="" srcset=""></div>
      <div class="product_details">
        <div class="product_name">
          <span>{{samsung.productName}}</span>
        </div>
        <div class="product_price">
          <span>₦{{samsung.price}}</span>
        </div>
      </div>
  </div>
`,
                styleUrls: ['./recommend.component.css', '../top/top.component.css']
            }]
    }], function () { return []; }, { samsung: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "ziXE":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/product.service */ "9UTf");
/* harmony import */ var _products_shared_top_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../products/shared/top.service */ "qmub");
/* harmony import */ var _products_shared_recommended_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../products/shared/recommended.service */ "mv7u");
/* harmony import */ var _shared_samsung_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/samsung.service */ "Tq5s");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../carousel/carousel.component */ "EfPX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _list_product_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./list/product.list */ "/hQp");
/* harmony import */ var _top_top_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./top/top.component */ "8xIo");
/* harmony import */ var _recommend_recommend_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./recommend/recommend.component */ "ZtiI");
/* harmony import */ var _recommend_recommended_samsung_componet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./recommend/recommended.samsung.componet */ "uyMs");












function ProductsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-list", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_entry_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", product_entry_r4);
} }
function ProductsComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-top", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const top_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("top", top_r5);
} }
function ProductsComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-recommend", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recommended_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("recommend", recommended_r6);
} }
function ProductsComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-samsung", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const samOfficial_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("samsung", samOfficial_r7);
} }
class ProductsComponent {
    constructor(productservice, topservice, recomservice, samservice) {
        this.productservice = productservice;
        this.topservice = topservice;
        this.recomservice = recomservice;
        this.samservice = samservice;
    }
    ngOnInit() {
        this.products = this.productservice.getProduct();
        this.topCollection = this.topservice.getTopCollections();
        this.recomProduct = this.recomservice.getRecomProducts();
        this.official = this.samservice.samRecomProducts();
    }
}
ProductsComponent.ɵfac = function ProductsComponent_Factory(t) { return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_products_shared_top_service__WEBPACK_IMPORTED_MODULE_2__["TopService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_products_shared_recommended_service__WEBPACK_IMPORTED_MODULE_3__["RecommendedProduct"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_samsung_service__WEBPACK_IMPORTED_MODULE_4__["SamsungProduct"])); };
ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductsComponent, selectors: [["app-products"]], inputs: { recommend: "recommend" }, decls: 62, vars: 4, consts: [[1, "container-fluid", "product_container"], [1, "row"], ["class", "col-sm-2 col-md-4 col-lg-2", 4, "ngFor", "ngForOf"], [1, "col-sm-3", "col-md-3"], [1, "product__banner"], [1, "product__banner_items"], [1, "product__banner_img"], ["src", "../../assets/banners/star.svg", "alt", ""], [1, "product__banner_header"], ["src", "../../assets/banners/delivery.svg", "alt", ""], ["src", "../../assets/banners/secure.svg", "alt", ""], ["src", "../../assets/banners/time.svg", "alt", ""], [1, "product__banner_advert", "product_banner_container"], [1, "col-sm-12", "col-md-12"], ["src", "../../assets/banners/amelia.png"], [1, "product__banner_advert_content"], [1, "container-fluid", "top_collection"], [1, "top__collection_header"], [1, "container-fluid", "recommend_collection"], [1, "col-sm-12", "col-md-12", "product__product_image"], ["src", "../../../assets/banners/samsung.png"], [1, "col-sm-2", "col-md-4", "col-lg-2"], [3, "data"], [3, "top"], [3, "recommend"], [3, "samsung"]], template: function ProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProductsComponent_div_4_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Top Notch Items");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Fee Delivery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Secure Payment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "On Time Delivery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h2", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "All you need in one place!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h2", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Top Collection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, ProductsComponent_div_49_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h2", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Recommended Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, ProductsComponent_div_54_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, ProductsComponent_div_60_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.topCollection);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.recomProduct);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.official);
    } }, directives: [_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_5__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _list_product_list__WEBPACK_IMPORTED_MODULE_7__["ProductsListComponent"], _top_top_component__WEBPACK_IMPORTED_MODULE_8__["TopComponent"], _recommend_recommend_component__WEBPACK_IMPORTED_MODULE_9__["RecommendedComponent"], _recommend_recommended_samsung_componet__WEBPACK_IMPORTED_MODULE_10__["SamsungRecommendedComponent"]], styles: [".product_container[_ngcontent-%COMP%] {\r\n    margin-top: 2rem;\r\n    margin-bottom: 2rem;\r\n    padding-right: 3rem;\r\n    padding-left: 3rem;\r\n    overflow: hidden;\r\n}\r\n.product__banner[_ngcontent-%COMP%] {\r\n    background: #E1E1E1;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n}\r\n.product__banner_items[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-top: 1rem; \r\n    padding: 8px; \r\n}\r\n.product__banner_img[_ngcontent-%COMP%] {\r\n    \r\n    \r\n}\r\n.product__banner_img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 27px;\r\n    display: block;\r\n    margin: 0 auto;\r\n}\r\n.product__banner_header[_ngcontent-%COMP%] {\r\n    margin-left: 10px;\r\n}\r\n.product__banner_header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    color: #101010;\r\n    font-size: 1.5rem;\r\n    font-weight: bolder;\r\n}\r\n.product__banner_advert[_ngcontent-%COMP%] {\r\n    overflow: hidden;\r\n    width: 100%;\r\n    margin-top: 2rem;\r\n    margin-bottom: 2rem;\r\n}\r\n.product__banner_advert[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 120px; \r\n}\r\n.product__banner_advert_content[_ngcontent-%COMP%] {\r\n    color: #101010;\r\n    text-transform: uppercase;\r\n    font-weight: bolder;\r\n    margin: 0;\r\n    padding: 0;\r\n    position: absolute;\r\n    left: 17rem;\r\n    top: 35px;\r\n    z-index: 2;\r\n}\r\n@media (max-width: 468px) {\r\n    .product__banner_advert_content[_ngcontent-%COMP%] {\r\n        left: 0rem;\r\n        font-weight: bold;\r\n        font-size: 18px;\r\n    }\r\n}\r\n@media (max-width: 768px) {\r\n    .product__banner_items[_ngcontent-%COMP%] {\r\n        margin-top: 8px;\r\n        padding: 8px;\r\n    }\r\n    .product__banner_img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        width: 20px;\r\n    }\r\n    .product__banner_header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n        font-size: 14px;\r\n    }\r\n    .product__banner_advert_content[_ngcontent-%COMP%] {\r\n        left: 9rem;\r\n    }\r\n\r\n}\r\n@media (min-width: 800px) and (max-width: 1024px) {\r\n    .product__banner_items[_ngcontent-%COMP%] {\r\n        margin-top: 10px;\r\n        padding: 10px;\r\n    }\r\n    .product__banner_header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n        font-size: 18px;\r\n        padding-top: 5px;\r\n    }\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCOztnQkFFWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCO0FBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztJQUNULFVBQVU7QUFDZDtBQUVBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsaUJBQWlCO1FBQ2pCLGVBQWU7SUFDbkI7QUFDSjtBQUVBO0lBQ0k7UUFDSSxlQUFlO1FBQ2YsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7O0FBRUo7QUFFQTtJQUNJO1FBQ0ksZ0JBQWdCO1FBQ2hCLGFBQWE7SUFDakI7SUFDQTtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7O0FBRUoiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3RfY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogM3JlbTtcclxuICAgIHBhZGRpbmctbGVmdDogM3JlbTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLnByb2R1Y3RfX2Jhbm5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRTFFMUUxO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ucHJvZHVjdF9fYmFubmVyX2l0ZW1zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07IFxyXG4gICAgcGFkZGluZzogOHB4OyBcclxufVxyXG4ucHJvZHVjdF9fYmFubmVyX2ltZyB7XHJcbiAgICAvKiBtYXJnaW4tcmlnaHQ6IDEycmVtOyAqL1xyXG4gICAgLyogcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcmlnaHQ6IDM1cHg7XHJcbiAgICB0b3A6IDI1cHg7ICovXHJcbn1cclxuLnByb2R1Y3RfX2Jhbm5lcl9pbWcgaW1nIHtcclxuICAgIHdpZHRoOiAyN3B4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLnByb2R1Y3RfX2Jhbm5lcl9oZWFkZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn0gXHJcblxyXG4ucHJvZHVjdF9fYmFubmVyX2hlYWRlciBoMiB7XHJcbiAgICBjb2xvcjogIzEwMTAxMDtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG4ucHJvZHVjdF9fYmFubmVyX2FkdmVydCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxufVxyXG4ucHJvZHVjdF9fYmFubmVyX2FkdmVydCBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEyMHB4OyBcclxufVxyXG5cclxuLnByb2R1Y3RfX2Jhbm5lcl9hZHZlcnRfY29udGVudCB7XHJcbiAgICBjb2xvcjogIzEwMTAxMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDE3cmVtO1xyXG4gICAgdG9wOiAzNXB4O1xyXG4gICAgei1pbmRleDogMjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ2OHB4KSB7XHJcbiAgICAucHJvZHVjdF9fYmFubmVyX2FkdmVydF9jb250ZW50IHtcclxuICAgICAgICBsZWZ0OiAwcmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAucHJvZHVjdF9fYmFubmVyX2l0ZW1zIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgfVxyXG4gICAgLnByb2R1Y3RfX2Jhbm5lcl9pbWcgaW1nIHtcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgIH1cclxuICAgIC5wcm9kdWN0X19iYW5uZXJfaGVhZGVyIGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgICAucHJvZHVjdF9fYmFubmVyX2FkdmVydF9jb250ZW50IHtcclxuICAgICAgICBsZWZ0OiA5cmVtO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDgwMHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAucHJvZHVjdF9fYmFubmVyX2l0ZW1zIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAucHJvZHVjdF9fYmFubmVyX2hlYWRlciBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICB9XHJcbiAgICBcclxufSJdfQ== */", ".top_collection[_ngcontent-%COMP%]{\r\n  background: #FEFEFE 0% 0% no-repeat padding-box;\r\n  border: 1px solid #707070; \r\n  border-radius: 15px;\r\n  opacity: .95;\r\n  margin: 2rem;\r\n  padding-top: 3rem;\r\n  padding-bottom: 1rem; \r\n  overflow: hidden;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n\r\n}\r\n\r\n.top__collection_header[_ngcontent-%COMP%] {\r\n  letter-spacing: 0px;\r\n  color: #101010;\r\n  font: normal normal 900 29px/39px Segoe UI;\r\n  letter-spacing: 0px;\r\n  color: #101010;\r\n  text-align: center;\r\n \r\n}\r\n\r\n.product_list_card[_ngcontent-%COMP%] {\r\n  background: transparent;\r\n  width: 100%;\r\n  height: 100%;\r\n  border: 1px solid #fff;\r\n  border-radius: 7px;\r\n  opacity: 1;\r\n  cursor: pointer;\r\n}\r\n\r\n.product_list_card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n.product_details[_ngcontent-%COMP%] {\r\n  background: #B9B9B9 0% 0% no-repeat padding-box;\r\n  border-radius: 0px 0px 7px 7px;\r\n  box-shadow: 1px 1px 2px 1px rgba(0,0,0,.4);\r\n  width: 100%;\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n}\r\n\r\n.product_name[_ngcontent-%COMP%], .product_price[_ngcontent-%COMP%] {\r\n  margin-left: 1rem;\r\n}\r\n\r\n.product_name[_ngcontent-%COMP%] {\r\n  padding: .1rem;\r\n  font-weight: 400;\r\n  font-size: 12px;\r\n}\r\n\r\n.product_price[_ngcontent-%COMP%] {\r\n  font-weight: 900;\r\n  font-size: large;\r\n  color: #101010;\r\n  opacity: 1;\r\n  padding: .1rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvdG9wL3RvcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0NBQStDO0VBQy9DLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQiwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjs7QUFFcEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLDBDQUEwQztFQUMxQyxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGtCQUFrQjs7QUFFcEI7O0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsK0NBQStDO0VBQy9DLDhCQUE4QjtFQUM5QiwwQ0FBMEM7RUFDMUMsV0FBVztFQUNYLDJCQUFtQjtFQUFuQix3QkFBbUI7RUFBbkIsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFVBQVU7RUFDVixjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvdG9wL3RvcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcF9jb2xsZWN0aW9ue1xyXG4gIGJhY2tncm91bmQ6ICNGRUZFRkUgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7IFxyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgb3BhY2l0eTogLjk1O1xyXG4gIG1hcmdpbjogMnJlbTtcclxuICBwYWRkaW5nLXRvcDogM3JlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTsgXHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcblxyXG59XHJcblxyXG4udG9wX19jb2xsZWN0aW9uX2hlYWRlciB7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICBjb2xvcjogIzEwMTAxMDtcclxuICBmb250OiBub3JtYWwgbm9ybWFsIDkwMCAyOXB4LzM5cHggU2Vnb2UgVUk7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICBjb2xvcjogIzEwMTAxMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiBcclxufVxyXG4ucHJvZHVjdF9saXN0X2NhcmQge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnByb2R1Y3RfbGlzdF9jYXJkIGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5wcm9kdWN0X2RldGFpbHMge1xyXG4gIGJhY2tncm91bmQ6ICNCOUI5QjkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggN3B4IDdweDtcclxuICBib3gtc2hhZG93OiAxcHggMXB4IDJweCAxcHggcmdiYSgwLDAsMCwuNCk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxufVxyXG5cclxuLnByb2R1Y3RfbmFtZSxcclxuLnByb2R1Y3RfcHJpY2Uge1xyXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG59XHJcblxyXG4ucHJvZHVjdF9uYW1lIHtcclxuICBwYWRkaW5nOiAuMXJlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLnByb2R1Y3RfcHJpY2Uge1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICBjb2xvcjogIzEwMTAxMDtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHBhZGRpbmc6IC4xcmVtO1xyXG59XHJcblxyXG4iXX0= */", ".recommend_collection[_ngcontent-%COMP%] {\r\n  background: #FEFEFE 0% 0% no-repeat padding-box;\r\n  border: 1px solid #707070; \r\n  border-radius: 15px;\r\n  opacity: .95;\r\n  margin: 2rem;\r\n  padding-top: 3rem;\r\n  padding-bottom: 1rem; \r\n  overflow: hidden;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n}\r\n.recommend_product[_ngcontent-%COMP%] {\r\n    margin: 0.5rem 0;\r\n}\r\n.product__product_image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    margin-top: 2.5rem;\r\n    margin-bottom: 1.5rem;\r\n    width: 100%;\r\n    height: 100% !important;\r\n}\r\n@media (max-width:540px) {\r\n  .recommend_collection[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvcmVjb21tZW5kL3JlY29tbWVuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0NBQStDO0VBQy9DLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQiwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtBQUNwQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCx1QkFBdUI7QUFDM0I7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0cy9yZWNvbW1lbmQvcmVjb21tZW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVjb21tZW5kX2NvbGxlY3Rpb24ge1xyXG4gIGJhY2tncm91bmQ6ICNGRUZFRkUgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7IFxyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgb3BhY2l0eTogLjk1O1xyXG4gIG1hcmdpbjogMnJlbTtcclxuICBwYWRkaW5nLXRvcDogM3JlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTsgXHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbn1cclxuLnJlY29tbWVuZF9wcm9kdWN0IHtcclxuICAgIG1hcmdpbjogMC41cmVtIDA7XHJcbn1cclxuXHJcbi5wcm9kdWN0X19wcm9kdWN0X2ltYWdlICBpbWcge1xyXG4gICAgbWFyZ2luLXRvcDogMi41cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6NTQwcHgpIHtcclxuICAucmVjb21tZW5kX2NvbGxlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-products',
                template: `
  <div>
  <app-carousel></app-carousel>
    <div class="container-fluid product_container">
      <div class="row">
        <div class="col-sm-2 col-md-4 col-lg-2" *ngFor="let product_entry of products">
          <app-list [data]="product_entry"></app-list>
        </div>
      </div>
    </div>
    <div class="container-fluid product_container">
      <div class="row">
        <div class="col-sm-3 col-md-3">
          <div class="product__banner">
              <div class="product__banner_items">
                <div class="product__banner_img">
                 <img src="../../assets/banners/star.svg" alt="" />
                </div>
                <div class="product__banner_header">
                  <h2>Top Notch Items</h2>
                </div>
              </div>
          </div>
        </div>
        <div class="col-sm-3 col-md-3">
          <div class="product__banner">
              <div class="product__banner_items">
                <div class="product__banner_img">
                 <img src="../../assets/banners/delivery.svg" alt="" />
                </div>
                <div class="product__banner_header">
                  <h2>Fee Delivery</h2>
                </div>
              </div>
          </div>
        </div>
        <div class="col-sm-3 col-md-3">
          <div class="product__banner">
              <div class="product__banner_items">
                <div class="product__banner_img">
                 <img src="../../assets/banners/secure.svg" alt="" />
                </div>
                <div class="product__banner_header">
                  <h2>Secure Payment</h2>
                </div>
              </div>
          </div>
        </div>
        <div class="col-sm-3 col-md-3">
          <div class="product__banner">
              <div class="product__banner_items">
                <div class="product__banner_img">
                 <img src="../../assets/banners/time.svg" alt="" />
                </div>
                <div class="product__banner_header">
                  <h2>On Time Delivery</h2>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div class="product__banner_advert product_banner_container">
    <div class="row">
    <div class="col-sm-12 col-md-12">
      <img src="../../assets/banners/amelia.png" />
      <h2 class="product__banner_advert_content">All you need in one place!</h2>
    </div>
  </div>
  </div>
  <div class="container-fluid top_collection">
     <h2 class="top__collection_header">Top Collection</h2>
      <div class="row">
        <div class="col-sm-2 col-md-4 col-lg-2" *ngFor="let top of topCollection">
          <app-top [top]="top"></app-top>
        </div>
      </div>
  </div>
  <div class="container-fluid recommend_collection">
    <h2 class="top__collection_header">Recommended Products</h2>
      <div class="row">
        <div class="col-sm-2 col-md-4 col-lg-2" *ngFor="let recommended of recomProduct">
          <app-recommend [recommend]="recommended"></app-recommend>
        </div>
        <div class="product__banner_advert product_banner_container">
          <div class="row">
          <div class="col-sm-12 col-md-12 product__product_image">
            <img src="../../../assets/banners/samsung.png"/>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-2 col-md-4 col-lg-2" *ngFor="let samOfficial of official">
          <app-samsung [samsung]="samOfficial"></app-samsung>
      </div>
    </div>
</div>
    
       

  <div>
  
  `,
                styleUrls: ['./products.component.css', './top/top.component.css', './recommend/recommend.component.css']
            }]
    }], function () { return [{ type: _shared_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"] }, { type: _products_shared_top_service__WEBPACK_IMPORTED_MODULE_2__["TopService"] }, { type: _products_shared_recommended_service__WEBPACK_IMPORTED_MODULE_3__["RecommendedProduct"] }, { type: _shared_samsung_service__WEBPACK_IMPORTED_MODULE_4__["SamsungProduct"] }]; }, { recommend: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map