import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';


import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from "../../environment";

import { FormsModule } from '@angular/forms';
import { ComponentsComponent } from './components/components.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { SearchMoviesComponent } from './components/search-movies/search-movies.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { LoginPageComponent } from '../app/login-page/login-page.component';


// service
// import { AuthService } from './shared/services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchMoviesComponent,
    TopNavComponent,
    MovieDetailsComponent,
    LoginPageComponent,
  ],
  exports: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    // HttpClient,
    // HttpModule
  ],
  providers: [LoginPageComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
