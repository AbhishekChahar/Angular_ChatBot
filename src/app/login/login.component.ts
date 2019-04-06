import { Component, OnInit } from '@angular/core';

import { Login } from '../models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( ) { }

  ngOnInit() {
  }

  login(username , password) {
    console.log(username.value);
    console.log(password.value);
    let login = new Login(username.value , password.value ) ;

  }

}
