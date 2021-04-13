import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user : User

  constructor(private _client : HttpClient) { }


connect() {
  this._client.post<User>("http://stevebstorm.somee.com/api/auth/auth", {email : "steve.lorent@bstorm.be", password : "test1234"})
  .subscribe((u : User) =>  {
    this.user = u;
    localStorage.setItem("token", u.token)
  })
}
}
export class User {
  id : number;
  token : string;
}
