import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-loginwithpassword',
  templateUrl: './loginwithpassword.component.html',
  styleUrls: ['./loginwithpassword.component.scss']
})
export class LoginwithpasswordComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit() {
  }
  onLogin(form:NgForm){
   const email=form.value.email;
   const password=form.value.password;
   this.auth.signinUser(email,password);
  }
}
