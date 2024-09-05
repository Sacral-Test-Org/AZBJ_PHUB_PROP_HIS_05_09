import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrutinyStatusService {
  private apiUrl = 'https://api.example.com/scrutiny-status'; // Replace with your actual API URL

  constructor(private http: HttpClient) { }

  getScrutinyStatus(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
