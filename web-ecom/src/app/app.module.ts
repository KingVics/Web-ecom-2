import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms"
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component'
import { LoginComponent } from './user/login/login.component'
import {RegistrationComponent} from './user/registration/register.component'
import {appRoutes} from './routes'
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import {CarouselComponent} from './carousel/carousel.component'
import { from } from 'rxjs';
import { ProductsComponent } from './products/products.component';
import { ErrorComponent } from './error/error.component';
import { AuthService } from "./user/authService"
import { HomeComponent } from './home/home.component';
import { ProductService } from './products/shared/product.service';
import { ProductsListComponent } from './products/list/product.list';
import { HttpClientModule } from "@angular/common/http"

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    NavbarComponent,
    LoginComponent,
    RegistrationComponent,
    FooterComponent,
    ProductsComponent,
    ErrorComponent,
    ProductsListComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProductService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
