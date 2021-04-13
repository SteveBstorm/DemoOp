import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, fromEvent, Observable, of, Subscription } from 'rxjs';
import {tap, map, groupBy, mergeMap, reduce, delay, filter} from 'rxjs/operators'
import { AuthService } from '../auth.service';
import { ConsoService, Movie, Person } from '../conso.service';
import { FakeauthService } from '../fakeauth.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit, OnDestroy {

  liste : Movie[]
  errormessage : string;
  current : Movie

  property : boolean

  mySub : Subscription



  constructor(
    private _data : ConsoService,
    private _auth : AuthService,
    private _myService : FakeauthService
  ) { }
  // get status() : boolean {
  //   return this._fake.isConnected
  // }

  ngOnDestroy() : void {
    this.mySub.unsubscribe()
  }


  ngOnInit(): void {
    this.mySub = this._myService.mySubject.subscribe(
      (value : boolean) => this.property = value)

      this._myService.mySubject
        .pipe(/*appliquer les oparéteurs*/)
        .subscribe(/*Gérer l'abonnement*/)

//this.status = this._fake.isConnected
    // const obs = new Observable(o => {
    //   navigator.geolocation.watchPosition((x)=> o.next(x))
    // })

    // obs.pipe(filter(x => x != null)).subscribe(x => console.log(x))

    //this._data.getPok().subscribe(console.log)

    //this._data.getOne(1).subscribe(m => this.current = m)

    //this._auth.connect();
    //this._data.getOne(1).subscribe((x:Movie) => this.current = x)

    const liste2 = of([
      {id : 1, lastName : "Lorent", firstName : "Steve"},
      {id : 2, lastName : "Morre", firstName : "Thierry"},
      {id : 3, lastName : "Person", firstName : "Michael"},
      {id : 4, lastName : "Ly", firstName : "Khun"}
      ])

    //   //liste2.pipe(filter(x => x != null))
    // liste2.pipe(
    //   tap((x : Person[]) => this.liste = x),
    //   delay(2000),
    //   map((x : Person[]) => x.filter(z => z.id <= 2)),
    //   tap((x : Person[]) => this.liste = x),
    //   delay(2000),
    //   map(x => x.filter(z => z.id <=1))

    // )
    // .subscribe((x : Person[]) => this.liste = x, () => {}, () => console.log("fini "))


    // this._data.getAll()
    //   .pipe(
    //     tap((x : Movie[])=> this.liste = x),
    //     delay(2000),
    //     map((m : Movie[]) => m.filter(f => f.id == 1)))
    //     .subscribe(
    //       (l : Movie[]) => this.liste = l,
    //       (error) => {this.errormessage = error.message; console.log(typeof(error))}
    //       )

    //this._data.getAll().pipe(filter((m) => m.)
  }

}

