import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequirementDespatch } from '../shared/models/requirement-despatch.model';

@Injectable({
  providedIn: 'root'
})
export class RequirementDespatchService {
  private apiUrl = 'http://localhost:8080/api/requirements';

  constructor(private http: HttpClient) { }

  getRequirements(): Observable<RequirementDespatch[]> {
    return this.http.get<RequirementDespatch[]>(this.apiUrl);
  }

  // Additional methods to handle assignment details
  assignRequirement(assignedTo: string, assignedDate: string): Observable<any> {
    const payload = { assignedTo, assignedDate };
    return this.http.post(`${this.apiUrl}/assign`, payload);
  }

  exitAssignmentScreen(): void {
    // Logic to handle exit action, e.g., navigate to another screen or close the current window
  }
}