import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmailLogHistory } from '../shared/models/email-log-history.model';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class EmailLogHistoryService {
  private apiUrl = '/api/email-log-history';

  constructor(private http: HttpClient, private logger: NGXLogger) {}

  fetchEmailLogHistory(): Observable<EmailLogHistory[]> {
    this.logger.debug('Fetching email log history');
    return this.http.get<EmailLogHistory[]>(this.apiUrl);
  }

  updateEmailStatus(emailId: string, newStatus: string): Observable<void> {
    this.logger.debug(`Updating email status for emailId: ${emailId} to newStatus: ${newStatus}`);
    return this.http.put<void>(`${this.apiUrl}/${emailId}`, { status: newStatus });
  }
}
