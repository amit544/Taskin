import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Observable, Subscription } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList } from '@angular/fire/database';
import { timingSafeEqual } from 'crypto';
import { Pipe } from '@angular/core';
import * as firebase from 'firebase';
import { Product } from 'src/app/models/products';
import { ShoppingCartService } from '../../shopping-cart.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})


export class ProductComponent implements OnInit {
  products$:any;
  products: any[];
  filteredProduct:any[];
  subscription:Subscription;
  constructor(private db: ProductService, public data: AngularFireDatabase,
     private ShoppingCart:ShoppingCartService
  ) {
    this.products$=this.db.getCategories()
    this.subscription=this.db.getCategories().subscribe(products=>this.products=products)
  }
  filter(queory:string){
    console.log(queory);
    this.filteredProduct=(queory)?
    this.products.filter(p=>p.title.toLowerCase().includes(queory.toLowerCase())):
    this.products;
  }
  ngOnDestroy(){
this.subscription.unsubscribe();
  }
  addToCart(product:Product){
    let cartId=localStorage.getItem('cartId');
    if (!cartId){
     this.ShoppingCart.create().then  (result=>{
      localStorage.setItem('cartId',result.key); 
     });
     
    }
    else{
      //add to caert
    }
    console.log("amit");
  }
  ngOnInit() {
    

  }
}
