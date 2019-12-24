import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { error } from 'protractor';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
      user$: Observable<firebase.User> ;
  constructor(private auth:AngularFireAuth) {
    this.user$=auth.authState;
   }
   login(){
    this.auth.auth.signInWithRedirect( new firebase.auth.GoogleAuthProvider())
   }
   logout(){
    this.auth.auth.signOut()
    console.log("amit")
   }
   signupUser(email:string,password:string){
      firebase.auth().createUserWithEmailAndPassword(email,password).catch(error=>console.log(error))
   }
   signinUser(email:string,password:string){
     firebase.auth().signInWithEmailAndPassword(email,password).then(
       Response=>console.log(Response)
     ).catch(
       error=>console.log(error)
     );
   }
}
