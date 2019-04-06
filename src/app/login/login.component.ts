import { Component, OnInit } from '@angular/core';

import { Login } from '../models/login.model';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService ) { }

  ngOnInit() {
  }

  login(username , password) {
    console.log(username.value);
    console.log(password.value);
    let login = new Login(username.value , password.value );
    this.loginService.login(login).subscribe( res => {
      console.log(res)
      alert('Login Successfully!!')
    }, err => {
        console.log(err);
        alert('Login Failed')
    });

  }

}
