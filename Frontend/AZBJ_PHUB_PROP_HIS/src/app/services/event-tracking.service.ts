import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventTrackingService {
  private apiUrl = 'http://your-api-url.com/events';

  constructor(private http: HttpClient) {}

  updateEventStatus(status: string, eventNumber: number, proposalNumber: number, truncatedDate: string): Observable<any> {
    const url = `${this.apiUrl}/updateStatus`;
    const body = { status, eventNumber, proposalNumber, truncatedDate };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(url, body, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return throwError('Something bad happened; please try again later.');
  }
}
