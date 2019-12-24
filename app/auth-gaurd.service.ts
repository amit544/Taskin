import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService  {

  constructor( private auth :AuthService,private router:Router) { }
  // canActivate(){
  //   return  this.auth.user$.(user=>{
  // if(user) return true;
  // this.router.navigate(['/login']); 
  // return false;
// });
//   }
// }
  }
