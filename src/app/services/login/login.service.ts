import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: Http) { }
  public login(data){
      this.http.post('http://52.77.55.48:3000/users/login', data);
  }
}
