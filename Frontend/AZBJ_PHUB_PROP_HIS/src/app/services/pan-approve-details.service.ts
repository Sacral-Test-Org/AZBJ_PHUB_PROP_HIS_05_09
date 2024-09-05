import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PanApprovalDetail } from '../models/pan-approval-detail.model';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class PanApproveDetailsService {
  private apiUrl = 'http://localhost:8080/api/pan-approve-details';

  constructor(private http: HttpClient, private logger: NGXLogger) {}

  getPanApprovalDetails(): Observable<PanApprovalDetail[]> {
    this.logger.debug('Fetching PAN approval details from backend');
    return this.http.get<PanApprovalDetail[]>(this.apiUrl);
  }
}
