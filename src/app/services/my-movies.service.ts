import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentChangeAction} from "@angular/fire/compat/firestore";
import { SavedMovies } from '../interfaces/saved-movies';
import { Observable, map, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyMoviesService {

  private movieRef: AngularFirestoreDocument<SavedMovies>;
  private moviesRef: AngularFirestoreCollection<SavedMovies>;

  constructor(private db: AngularFirestore) { 
    this.movieRef = this.db.doc<SavedMovies>('');
    this.moviesRef = this.db.collection<SavedMovies>('savedMovies');

  }

  getMoviesObservable(): Observable<SavedMovies[]> {
    return this.moviesRef.snapshotChanges()
      .pipe(
        map((items: DocumentChangeAction<SavedMovies>[]): SavedMovies[] => {
          return items.map((item: DocumentChangeAction<SavedMovies>): SavedMovies => {
            return {
              id: item.payload.doc.id,
              watched: item.payload.doc.data().watched,
              watching: item.payload.doc.data().watching,
              comment: item.payload.doc.data().comment,
              rating: item.payload.doc.data().rating
            };
          });
        }),                           // <-- don't forget the new comma here
        catchError(this.errorHandler) // <-- new
      );
  }


  private errorHandler(error: any) {
    console.log(error);
    return throwError(error);
  }
}
