import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/movie';
import { SavedMovies } from 'src/app/interfaces/saved-movies';
import { GetMoviesService } from 'src/app/services/get-movies.service';

@Component({
  selector: 'app-my-movies',
  templateUrl: './my-movies.component.html',
  styleUrls: ['./my-movies.component.scss']
})
export class MyMoviesComponent {

  apiResponse: string = '';
  moviesArray: Movie[] = [];


  constructor (
    private gitDatInfo: GetMoviesService,
    // private cacheDatInfo: CacheDatInfoService, 
    private route: ActivatedRoute,
    private router: Router,
    )
    {}

    ngOnInit(){
      this.search();
  
    }

  search(){
    let movieId = '238'
    // console.log('this is the search term', name)
    this.moviesArray = [];
    this.gitDatInfo.searchMovies(movieId).subscribe(
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


  goToMovieDetails(movieId: string) {
    console.log('the movei id get movie detail', movieId)
    this.router.navigate(['/movie-details', movieId])
  }

}
