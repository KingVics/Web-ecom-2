import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms"
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component'
import {appRoutes} from './routes'
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import {CarouselComponent} from './carousel/carousel.component'
import { from } from 'rxjs';
import { ProductsComponent } from './products/products.component';
import { ErrorComponent } from './error/error.component';
import { ProductService } from './products/shared/product.service';
import { ProductsListComponent } from './products/list/product.list';
import { HttpClientModule } from "@angular/common/http"
import { AuthService } from "./user/auth.service";
import { TopComponent } from './products/top/top.component';
import { RecommendedComponent } from './products/recommend/recommend.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component'
import {ProductRouterActivate} from "./products/product-details/product-router.activate.service"

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    NavbarComponent,
    FooterComponent,
    ProductsComponent,
    ErrorComponent,
    ProductsListComponent,
    TopComponent,
    RecommendedComponent,
    ProductDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    RouterModule
  ],
  providers: [
    ProductService, 
    AuthService,
    ProductRouterActivate],
   
  bootstrap: [AppComponent]
})
export class AppModule { }
