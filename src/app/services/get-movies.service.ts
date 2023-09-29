import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetMoviesService {

  constructor(  
    private http: HttpClient,
  ) { }

  headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZWVhZTE0N2ZhM2RlNTY0ZDViYjY1MDc1OGU4NGY4YiIsInN1YiI6IjY1MTVhNDJkMDQ5OWYyMDBlMWM2N2E1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Asy9PSsbR2tA-iPv8bWfmuFCtM5c9aGa2BHnfQa9C_k'
    })
  endpoint: string = 'https://api.themoviedb.org/3/movie/';
  endpoint2: string = 'https://api.themoviedb.org/3/account/';
  account: string = '20505356'
  apiKey: string = 'deeae147fa3de564d5bb650758e84f8b'
  /** GET pokemon from the server */
  searchMovies(name: string): Observable<any> {
    // return this.http.get<any>(this.endpoint + name.toLowerCase())
    // return this.http.get<any>(this.endpoint + name + this.account + '/lists/')
    console.log(this.endpoint + '11' + '?api_key=' + this.apiKey)
    return this.http.get<any>(this.endpoint + '11' + '?api_key=' + this.apiKey)
  }

  topRated():Observable<any>{
    return this.http.get<any>(this.endpoint + 'top_rated' + '?api_key=' + this.apiKey)
  }
}
