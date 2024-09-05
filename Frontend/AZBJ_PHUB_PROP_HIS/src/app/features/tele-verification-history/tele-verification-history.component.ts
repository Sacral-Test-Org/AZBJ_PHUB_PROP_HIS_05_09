import { Component, OnInit } from '@angular/core';
import { TeleVerificationHistoryService } from '../../services/tele-verification-history.service';
import { NGXLogger } from 'ngx-logger';
import { TeleVerificationHistory } from '../../models/tele-verification-history.model';

@Component({
  selector: 'app-tele-verification-history',
  templateUrl: './tele-verification-history.component.html',
  styleUrls: ['./tele-verification-history.component.css']
})
export class TeleVerificationHistoryComponent implements OnInit {
  teleVerificationHistory: TeleVerificationHistory[] = [];
  errorMessage: string = '';
  currentPage: number = 1;
  recordsPerPage: number = 7;

  constructor(private teleVerificationHistoryService: TeleVerificationHistoryService, private logger: NGXLogger) { }

  ngOnInit(): void {
    this.fetchTeleVerificationHistory();
  }

  fetchTeleVerificationHistory(): void {
    this.teleVerificationHistoryService.getTeleVerificationHistory().subscribe(
      (data: TeleVerificationHistory[]) => {
        this.teleVerificationHistory = data;
        this.logger.info('Tele verification history fetched successfully');
      },
      (error: any) => {
        this.errorMessage = 'An error occurred while fetching tele verification history.';
        this.logger.error('Error fetching tele verification history', error);
      }
    );
  }

  get paginatedRecords(): TeleVerificationHistory[] {
    const startIndex = (this.currentPage - 1) * this.recordsPerPage;
    const endIndex = startIndex + this.recordsPerPage;
    return this.teleVerificationHistory.slice(startIndex, endIndex);
  }

  nextPage(): void {
    if ((this.currentPage * this.recordsPerPage) < this.teleVerificationHistory.length) {
      this.currentPage++;
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  scrollHandler(event: Event): void {
    const target = event.target as HTMLElement;
    if (target.scrollTop + target.clientHeight >= target.scrollHeight) {
      this.nextPage();
    } else if (target.scrollTop === 0) {
      this.previousPage();
    }
  }

  openModal(): void {
    const modal = document.getElementById('teleVerificationModal');
    if (modal) {
      modal.style.display = 'block';
      modal.style.position = 'fixed';
      modal.style.top = '50%';
      modal.style.left = '50%';
      modal.style.transform = 'translate(-50%, -50%)';
      modal.style.width = '80%';
      modal.style.height = '80%';
      modal.style.overflowY = 'auto';
    }
  }

  closeModal(): void {
    const modal = document.getElementById('teleVerificationModal');
    if (modal) {
      modal.style.display = 'none';
    }
  }
}
