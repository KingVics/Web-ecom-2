(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "OsRL":
/*!************************************!*\
  !*** ./src/app/user/user.model.ts ***!
  \************************************/
/*! exports provided: IUSER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IUSER", function() { return IUSER; });
class IUSER {
    constructor() { }
}


/***/ }),

/***/ "mKoH":
/*!**********************************************!*\
  !*** ./src/app/user/registration.service.ts ***!
  \**********************************************/
/*! exports provided: RegistrationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationService", function() { return RegistrationService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");




class RegistrationService {
    constructor(http) {
        this.http = http;
    }
    loginUserfromRemote(user) {
        let options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        return this.http.post("https://cors-anywhere.herokuapp.com/https://sopaua.herokuapp.com/api/v1/login", user, options);
    }
    AdminUserfromRemote(user) {
        let options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        return this.http.post("https://cors-anywhere.herokuapp.com/https://sopaua.herokuapp.com/api/v1/login", user, options);
    }
    registerUserfromRemote(user) {
        let options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        return this.http.post("https://cors-anywhere.herokuapp.com/https://sopaua.herokuapp.com/api/v1/users", user, options);
    }
}
RegistrationService.ɵfac = function RegistrationService_Factory(t) { return new (t || RegistrationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
RegistrationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RegistrationService, factory: RegistrationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RegistrationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common.js.map