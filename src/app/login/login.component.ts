import { Component, OnInit } from '@angular/core';
import { FakeauthService } from '../fakeauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  status : boolean;

  constructor(
    private _auth : FakeauthService
  ) { }

  ngOnInit(): void {
    this._auth.mySubject.subscribe((value : boolean) => this.status = value)
    console.log(this._auth.mySubject.getValue())
    //this.status = this._auth.isConnected
  }

  login() {
    this._auth.login()
    //this.status = this._auth.isConnected
  }

  logout(){
    this._auth.logout()
    //this.status = this._auth.isConnected

  }

}
