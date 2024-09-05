import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReasonComment } from '../shared/models/reason-comment.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReasonCommentsService {
  private apiUrl = `${environment.apiUrl}/reason-comments`;

  constructor(private http: HttpClient) {}

  getReasonComments(): Observable<ReasonComment[]> {
    return this.http.get<ReasonComment[]>(`${this.apiUrl}/initial`);
  }

  getMoreReasonComments(): Observable<ReasonComment[]> {
    return this.http.get<ReasonComment[]>(`${this.apiUrl}/more`);
  }

  getApplicationNo(): string {
    // Logic to fetch the 'APPLICATION_NO' from the current form
    // This is a placeholder implementation and should be replaced with actual logic
    return 'APPLICATION_NO_PLACEHOLDER';
  }
}