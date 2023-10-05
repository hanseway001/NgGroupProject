import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchMoviesComponent } from '../components/search-movies/search-movies.component';
import { MovieDetailsComponent } from '../components/movie-details/movie-details.component';
import { LoginPageComponent } from '../login-page/login-page.component';

import { SignInComponent } from '../components/sign-in/sign-in.component';
import { SignUpComponent } from '../components/sign-up/sign-up.component';
import { VerifyEmailComponent } from '../components/verify-email/verify-email.component';
import { MyMoviesComponent } from '../components/my-movies/my-movies.component';


const routes: Routes = [
  // {path: '', component: },
  
  { path: '', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },

  {path: 'login', component: LoginPageComponent },
  {path: 'search', component: SearchMoviesComponent},
  // {path: 'movie-details/**', component: MovieDetailsComponent},
  {path: 'movie-details/:movieId', component: MovieDetailsComponent},
  // {path: '', redirectTo: 'search', pathMatch:'full'},
  {path: 'my-movies', component: MyMoviesComponent},
  // {path: 'error', component: ErrorComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
