import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PanApproveDetailsService } from '../../services/pan-approve-details.service';
import { PanApprovalDetail } from '../../shared/models/pan-approval-detail.model';

@Component({
  selector: 'app-pan-approve-details',
  templateUrl: './pan-approve-details.component.html',
  styleUrls: ['./pan-approve-details.component.css']
})
export class PanApproveDetailsComponent implements OnInit {
  panApprovalDetails: PanApprovalDetail[] = [];

  constructor(private panApproveDetailsService: PanApproveDetailsService, private router: Router) {}

  ngOnInit(): void {
    this.getPanApprovalDetails();
  }

  getPanApprovalDetails(): void {
    this.panApproveDetailsService.getPanApprovalDetails().subscribe(
      (data: PanApprovalDetail[]) => {
        this.panApprovalDetails = data;
      },
      (error) => {
        console.error('Error fetching PAN approval details', error);
      }
    );
  }

  exitView(): void {
    this.router.navigate(['/main-hub-details']).then(() => {
      const controlItem = document.getElementById('control-item');
      if (controlItem) {
        controlItem.focus();
      }
    });
  }
}