import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GetMoviesService } from 'src/app/services/get-movies.service';
import { Movie } from 'src/app/interfaces/movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.scss']
})
export class SearchMoviesComponent {

  form: FormGroup;
  formBuilder: FormBuilder = new FormBuilder;  // we'll want to be able to access this later outside of the controller
  
  apiResponse: string = '';
  moviesArray: Movie[] = [];
  // movie: Movie = new Movie;
  // movieObj: object = {}


  constructor (
    private gitDatInfo: GetMoviesService,
    // private cacheDatInfo: CacheDatInfoService, 
    formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    )
    {
      this.form = formBuilder.group({
        searchTerm: ['11']
      });
    }

  ngOnInit(){
    this.topRated();

  }

  search(){
    let name = this.form.controls['searchTerm'].value;
    // console.log('this is the search term', name)
    this.moviesArray = [];
    this.gitDatInfo.searchMovies(name).subscribe(
      (res: any) => {
        console.log('results',res)
        if (Array.isArray(res.results)) {
          res.results.forEach((movieData: { id: any; title: any; overview: any; poster_path: any}) => {
            if (movieData.id && movieData.title) {
              const movie: Movie = {
                id: movieData.id,
                title: movieData.title,
                overview: movieData.overview,
                poster: movieData.poster_path,
              };
              this.moviesArray.push(movie);
            }
          });
        }
 
      } );
  }

  topRated() {
    this.gitDatInfo.topRated().subscribe(
      (res: any) => {
        // this.apiResponse = JSON.stringify(res);
        if (Array.isArray(res.results)) {
          res.results.forEach((movieData: { id: any; title: any; overview: any; poster_path: any}) => {
            if (movieData.id && movieData.title) {
              const movie: Movie = {
                id: movieData.id,
                title: movieData.title,
                overview: movieData.overview,
                poster: movieData.poster_path,
              };
              this.moviesArray.push(movie);
              // console.log('movie Array', this.moviesArray)

            }
          });
        }
      } );
  }

  goToMovieDetails(movieId: string) {
    console.log('the movei id get movie detail', movieId)
    this.router.navigate(['/movie-details', movieId])
  }

}
