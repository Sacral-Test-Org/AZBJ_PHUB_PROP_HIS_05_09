import { Component, OnInit } from '@angular/core';
import { EmailLogHistoryService } from '../../services/email-log-history.service';
import { EmailLogHistory } from '../../shared/models/email-log-history.model';

@Component({
  selector: 'app-email-log-history',
  templateUrl: './email-log-history.component.html',
  styleUrls: ['./email-log-history.component.css']
})
export class EmailLogHistoryComponent implements OnInit {
  emailLogHistory: EmailLogHistory[] = [];

  constructor(private emailLogHistoryService: EmailLogHistoryService) {}

  ngOnInit(): void {
    this.getEmailLogHistory();
  }

  getEmailLogHistory(): void {
    this.emailLogHistoryService.fetchEmailLogHistory().subscribe(
      (data: EmailLogHistory[]) => {
        this.emailLogHistory = data;
      },
      (error) => {
        console.error('Error fetching email log history', error);
      }
    );
  }

  editEmailStatus(emailId: string, newStatus: string): void {
    this.emailLogHistoryService.updateEmailStatus(emailId, newStatus).subscribe(
      () => {
        this.getEmailLogHistory(); // Refresh the list after update
      },
      (error) => {
        console.error('Error updating email status', error);
      }
    );
  }
}
