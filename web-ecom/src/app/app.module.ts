import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component'
import { LoginComponent } from './login/login.component'
import {RegistrationComponent} from './registration/register.component'
import {appRoutes} from './routes'
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import {CarouselComponent} from './carousel/carousel.component'
import { from } from 'rxjs';
import { ProductsComponent } from './products/products.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { ProductService } from './products/shared/product.service';
import { ProductsListComponent } from './products/list/product.list';
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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
