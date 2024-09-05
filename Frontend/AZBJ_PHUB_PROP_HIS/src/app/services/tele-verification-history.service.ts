import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TeleVerificationHistory } from '../shared/models/tele-verification-history.model';

@Injectable({
  providedIn: 'root'
})
export class TeleVerificationHistoryService {
  private apiUrl = 'http://localhost:8080/api/tele-verification-history';

  constructor(private http: HttpClient) {}

  getTeleVerificationHistory(): Observable<TeleVerificationHistory[]> {
    return this.http.get<TeleVerificationHistory[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred.
      errorMessage = `An error occurred: ${error.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      errorMessage = `Server returned code: ${error.status}, error message is: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}