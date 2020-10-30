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
import {AllProductService} from "./products/shared/dist/all.product.service"
import {SamsungRecommendedComponent} from "./products/recommend/recommended.samsung.componet"
import {SamsungProduct} from "./products/shared/samsung.service"
import {EmailvalidatorDirective} from "./user/email.validator";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list'




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
    SamsungRecommendedComponent,
    EmailvalidatorDirective,
    MainNavComponent
 
  
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    RouterModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [
    ProductService,
    AllProductService, 
    AuthService,
    ProductRouterActivate,
    SamsungProduct],
   
  bootstrap: [AppComponent]
})
export class AppModule { }
