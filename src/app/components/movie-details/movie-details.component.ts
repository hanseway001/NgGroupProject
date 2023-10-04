import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/movie';
import { GetMoviesService } from 'src/app/services/get-movies.service';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent {
  movieArray: Movie[] = [];
  // form: any;
  apiResponse: string = '';

  constructor (
    private gitDatInfo: GetMoviesService,
    private route: ActivatedRoute, // <-- injects ActivatedRoute service

    // private cacheDatInfo: CacheDatInfoService, 

    )
    {

    }

    ngOnInit(){
      this.search();
  
    }

  search(){
    // let name = this.form.controls['searchTerm'].value;
    const movieId: string | null = this.route.snapshot.paramMap.get('movieId');
console.log('movieId in details component', movieId)
    this.movieArray = [];
    this.gitDatInfo.getMovie(movieId).subscribe(
      (res: any) => {
        // this.apiResponse = JSON.stringify(res);
        if (res) {
              const movie: Movie = {
                id: res.id,
                title: res.title,
                overview: res.overview,
                poster: res.poster_path,
                budget: res.budget,
                popularity: res.popularity,
                backdrop_path: res.backdrop_path
              };
              this.movieArray.push(movie);
              console.log('movie Array', this.movieArray)
        }
 
      } );
  }

}
