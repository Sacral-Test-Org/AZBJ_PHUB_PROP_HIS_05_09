import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CallHistory } from '../shared/models/call-history.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerCallHistoryService {
  private apiUrl = 'http://your-api-url.com/api/call-history';

  constructor(private http: HttpClient) {}

  getCallHistory(): Observable<CallHistory[]> {
    return this.http.get<CallHistory[]>(this.apiUrl);
  }
}