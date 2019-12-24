import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './admin/product/product.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { MyorderComponent } from './myorder/myorder.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { SignupComponent } from './signup/signup.component';
import { LoginwithpasswordComponent } from './loginwithpassword/loginwithpassword.component';
import { ProductsComponent } from './products/products.component';
import { CheckoutpageComponent } from './checkoutpage/checkoutpage.component';


const routes: Routes = [
 { path:"" , component:ProductsComponent},
 {path: "login",component:LoginComponent},
 {path:"admin/product",component:ProductComponent},
 {path:"shoppint-cart",component:ShoppingcartComponent},
 {path:"myorder",component:MyorderComponent},
 {path:"admin/product/new",component:ProductFormComponent},
 {path:"signup",component:SignupComponent},
 {path:"loginwithpassword",component:LoginwithpasswordComponent},
 {path:"checkuotpage",component:CheckoutpageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
