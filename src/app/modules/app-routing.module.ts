import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchMoviesComponent } from '../components/search-movies/search-movies.component';
import { MovieDetailsComponent } from '../components/movie-details/movie-details.component';

const routes: Routes = [
  // {path: '', component: },
  {path: 'search', component: SearchMoviesComponent},
  // {path: 'movie-details/**', component: MovieDetailsComponent},
  {path: 'movie-details/:movieId', component: MovieDetailsComponent},
  // {path: '', redirectTo: 'search', pathMatch:'full'},
  // {path: 'search', component: SearchMoviesComponent},
  // {path: 'error', component: ErrorComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
