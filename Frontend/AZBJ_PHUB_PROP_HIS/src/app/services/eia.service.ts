import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EiaStatus } from '../shared/models/eia-status.model';

@Injectable({
  providedIn: 'root'
})
export class EiaService {
  private apiUrl = 'http://your-api-url.com/eia-status'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  getEiaProcessStatus(): Observable<EiaStatus[]> {
    return this.http.get<EiaStatus[]>(this.apiUrl);
  }
}
