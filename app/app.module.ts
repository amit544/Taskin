import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule}  from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule } from 'angularfire2/auth'
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { CheckoutpageComponent } from './checkoutpage/checkoutpage.component';
import { OrderSucessComponent } from './order-sucess/order-sucess.component';
import { LoginComponent } from './login/login.component';
import { MyorderComponent } from './myorder/myorder.component';
import { ProductComponent } from './admin/product/product.component';
import { AdminnOrderComponent } from './admin/adminn-order/adminn-order.component';
import { HeaderComponent } from './header/header.component';
import { AuthService } from './auth.service';
import { AuthGaurdService } from './auth-gaurd.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CategoryService } from './category.service';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { LoginwithpasswordComponent } from './loginwithpassword/loginwithpassword.component';
import { ProductService } from './product.service';
import {CustomFormsModule } from 'ng2-validation';
import { ShoppingCartService } from './shopping-cart.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingcartComponent,
    CheckoutpageComponent,
    OrderSucessComponent,
    LoginComponent,
    MyorderComponent,
    ProductComponent,
    AdminnOrderComponent,
    HeaderComponent,
    ProductFormComponent,
    SignupComponent,
    LoginwithpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule,
    FormsModule,
    CustomFormsModule
    
    
  ],
  providers: [AuthService ,
              AuthGaurdService,
              CategoryService,
               ProductService,
              ShoppingCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
