import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { environment } from 'environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FormsModule } from '@angular/forms';
import { ComponentsComponent } from './components/components.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { SearchMoviesComponent } from './components/search-movies/search-movies.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchMoviesComponent,
    TopNavComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    HttpClientModule,
    // HttpClient,
    // HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
