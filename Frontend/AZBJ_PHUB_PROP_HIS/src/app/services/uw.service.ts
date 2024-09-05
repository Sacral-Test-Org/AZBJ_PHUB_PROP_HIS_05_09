import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UWData } from '../shared/models/uw-data.model';

@Injectable({
  providedIn: 'root'
})
export class UWService {
  private apiUrl = 'http://your-api-endpoint/uw-data'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  getUWData(): Observable<UWData[]> {
    return this.http.get<UWData[]>(this.apiUrl);
  }
}
