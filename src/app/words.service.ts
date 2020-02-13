import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Words } from './words';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordsService {

  words: string[];
  chosenWords: string[];

  constructor(private http: HttpClient) {}

    getWords(): Observable<string[]> {
     return this.http.get<string[]>('./assets/words.json')
      .pipe(
        catchError(this.handleError)
      );
    }

    handleError(err: HttpErrorResponse) {
      console.log(err.error.message);
      return throwError(err.error.message);
    }

  getWord() {
    this.chosenWords.push(this.words[Math.floor(Math.random() * this.words.length)]);
    return this.chosenWords[this.chosenWords.length - 1];
  }
}
