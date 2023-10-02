import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { Movie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class GetMoviesService {

  constructor(  
    private http: HttpClient,
  ) { }

  // SearchedMovies: object = {};

  headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZWVhZTE0N2ZhM2RlNTY0ZDViYjY1MDc1OGU4NGY4YiIsInN1YiI6IjY1MTVhNDJkMDQ5OWYyMDBlMWM2N2E1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Asy9PSsbR2tA-iPv8bWfmuFCtM5c9aGa2BHnfQa9C_k'
    })
  endpoint: string = 'https://api.themoviedb.org/3/movie/';
  endpoint2: string = 'https://api.themoviedb.org/3/account/';
  searchEP: string = 'https://api.themoviedb.org/3/search/movie' 

  account: string = '20505356'
  apiKey: string = 'deeae147fa3de564d5bb650758e84f8b'
  /** GET movies from the server */
  searchMovies(name: string): Observable<any> {
    return this.http.get<any>(this.searchEP+ '?api_key=' + this.apiKey + '&query=' + name + '&include_adult=false&language=en-US&page=1')
  }

  getMovie(id: string ): Observable<any> {
    return this.http.get<any>('https://api.themoviedb.org/3/movie/' + id + '?api_key=')
  }

  topRated():Observable<any>{
    return this.http.get<any>(this.endpoint + 'top_rated' + '?api_key=' + this.apiKey)
  }
}
