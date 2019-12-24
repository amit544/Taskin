import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireList, snapshotChanges} from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {0
  constructor( private db:AngularFireDatabase) { 

  }
  getCategories() {
    return  this.db.list('/products').valueChanges();
  }
  create(product){
    this.db.list('/products').push(product);
  }
   get(productId){
          // return this.db.list('/products')
          // //  this.db.list('/data/categories').snapshotChanges().forEach(
          //    userSnapshot=>
          //    {
          //    userSnapshot.forEach(userSnapshot=>{
          //     let user=userSnapshot.payload.toJSON();
          //    user['$key']=userSnapshot.key;
          //    return user;
          //    })
          //   }
     return this.db.object('/products/'+productId);
    
  
  }

}
