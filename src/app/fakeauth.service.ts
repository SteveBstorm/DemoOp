import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeauthService {

  private property : boolean = false;

  mySubject : BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(this.property);

  emit(){
    return this.mySubject.next(this.property)
  }

  constructor() { }

  login(){
    this.property = true;
    this.emit()
  }
  logout(){
    this.property = false;
    this.emit()
  }
}
