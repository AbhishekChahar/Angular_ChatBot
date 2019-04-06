import { Component, OnInit } from '@angular/core';

import {Signup} from '../models/signup.model';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  signup(name, email, password, verifypassword){
    let signup: Signup = new Signup(name.value, email.value, password.value, verifypassword.value);
    console.log(signup);
  }

}
