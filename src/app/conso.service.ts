import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http'
import { Observable } from 'rxjs';
import { delay, map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConsoService {

  constructor(
    private _client : HttpClient
  ) { }

  getAll() : Observable<Movie[]> {
    return this._client.get<Movie[]>("http://stevebstorm.somee.com/api/movie")
  }

  getOne(id : number) : Observable<Movie> {
    console.log(localStorage.getItem("token"))
    let headers = new HttpHeaders({
      'Authorization' : 'Bearer '+localStorage['token']
    })
    return this._client.get<Movie>("http://stevebstorm.somee.com/api/movie/"+id, {headers : headers})
    .pipe(mergeMap(
      m =>  {
        return this._client.get<Comment[]>("http://stevebstorm.somee.com/api/comment/"+ m.id).pipe(map(x => {
          m.comments = x;
          return m;
        }))
    }
      ))

  }

  getPok() : Observable<any> {
    return this._client.get("https://pokeapi.co/api/v2/pokemon/1").pipe(mergeMap(p => {
      return this._client.get(p['location_area_encounters']).pipe(map(x => ({location : x, pokemonName : p['name']})))
    }
    ))
  }

}

export interface Movie {
  id : number;
  title : string;
  description : string;
  releaseYear : number;
  realisator : Person;
  scenarist : Person;
  comments? : Comment[]
}

export interface Person {
  id : number;
  lastName : string;
  firstName : string;
}
export interface Comment {
  id : number;
  content : string;
  movieId : number;
  userId : number;
}
