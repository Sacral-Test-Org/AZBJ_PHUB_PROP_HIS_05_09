import { Component, OnInit } from '@angular/core';
import { ControlComponent } from './features/control/control.component';
import { TeleVerificationHistoryComponent } from './features/tele-verification-history/tele-verification-history.component';
import { Router } from '@angular/router';
import { ControlService } from './services/control.service';
import { RequirementDetail } from './models/requirement-detail.model';
import { ScrutinyStatusComponent } from './features/scrutiny-status/scrutiny-status.component';
import { PanApproveDetailsComponent } from './features/pan-approve-details/pan-approve-details.component';
import { EventTrackingComponent } from './features/event-tracking/event-tracking.component';
import { UWComponent } from './features/uw/uw.component';
import { CDAComponent } from './features/cda/cda.component';
import { RequirementDespatchComponent } from './features/requirement-despatch/requirement-despatch.component';
import { ReasonCommentsComponent } from './features/reason-comments/reason-comments.component';
import { EiaComponent } from './features/eia/eia.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AZBJ_PHUB_PROP_HIS';
  proposalNumber: string = '';
  requirementDetails: RequirementDetail[] = [];
  message: string = '';
  isCurrentViewVisible: boolean = true;
  globalCounter: number = 0;

  constructor(
    private controlComponent: ControlComponent,
    private teleVerificationHistoryComponent: TeleVerificationHistoryComponent,
    private router: Router,
    private controlService: ControlService,
    private scrutinyStatusComponent: ScrutinyStatusComponent,
    private panApproveDetailsComponent: PanApproveDetailsComponent,
    private eventTrackingComponent: EventTrackingComponent,
    private uwComponent: UWComponent,
    private cdaComponent: CDAComponent,
    private requirementDespatchComponent: RequirementDespatchComponent,
    private reasonCommentsComponent: ReasonCommentsComponent,
    private eiaComponent: EiaComponent
  ) {}

  ngOnInit(): void {
    this.initializeControlComponent();
    this.initializeTeleVerificationHistoryComponent();
    this.initializeScrutinyStatusComponent();
    this.initializePanApproveDetailsComponent();
    this.initializeEventTrackingComponent();
    this.initializeUWComponent();
    this.initializeCDAComponent();
    this.initializeRequirementDespatchComponent();
    this.initializeReasonCommentsComponent();
    this.initializeEiaComponent();
  }

  private initializeControlComponent(): void {
    this.controlComponent.initializeForm();
  }

  private initializeTeleVerificationHistoryComponent(): void {
    this.teleVerificationHistoryComponent.loadTeleVerificationHistory();
  }

  private initializeScrutinyStatusComponent(): void {
    this.scrutinyStatusComponent.loadScrutinyStatus();
  }

  private initializePanApproveDetailsComponent(): void {
    this.panApproveDetailsComponent.loadPanApproveDetails();
  }

  private initializeEventTrackingComponent(): void {
    this.eventTrackingComponent.initialize();
  }

  private initializeUWComponent(): void {
    this.uwComponent.ngOnInit();
  }

  private initializeCDAComponent(): void {
    this.cdaComponent.ngOnInit();
  }

  private initializeRequirementDespatchComponent(): void {
    this.requirementDespatchComponent.ngOnInit();
  }

  private initializeReasonCommentsComponent(): void {
    this.reasonCommentsComponent.ngOnInit();
  }

  private initializeEiaComponent(): void {
    this.eiaComponent.ngOnInit();
  }

  onClearButtonClick(): void {
    this.controlComponent.resetForm();
    this.controlComponent.hideFields([
      'RECEIPT', 'Merged_by', 'merged_on', 'CP_MERGING', 'Merg_req_dt', 'STATUS',
      'email_time', 'email_id', 'email_flag', 'success_mails', 'MERG_SUB_STATUS',
      'CKYC_EDIT', 'EKYC_EDIT', 'MERG_APPROVER_ID', 'AUTO_BBU_FLAG', 'APPROVED_REASON',
      'EIA_CASE', 'diff_state', 'AUTO_DE2_CASE', 'INFO_SHARE_LETTER', 'PHOD'
    ]);
    this.controlComponent.navigateToField('REASON_COMMENTS.EXIT');
  }

  onProposalNumberKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.controlComponent.navigateToField('ScrutinyNumber');
    }
  }

  onExitButtonClick(): void {
    this.router.navigate(['/search-control-item']).then(() => {
      this.isCurrentViewVisible = false;
    });
  }

  onPanApprovedDetailsButtonClick(): void {
    if (!this.controlComponent.applicationNumber) {
      alert('Please enter the application number.');
      return;
    }
    this.controlComponent.getPanApprovalDetails(this.controlComponent.applicationNumber).subscribe(
      (details) => {
        if (details.length > 0) {
          this.controlComponent.approvalDetails = details;
        } else {
          this.controlComponent.message = 'No details found for the given application number.';
        }
      },
      (error) => {
        console.error('Error fetching approval details:', error);
        this.controlComponent.message = 'An error occurred while fetching approval details.';
      }
    );
  }

  onApplicationNumberInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.controlComponent.applicationNumber = inputElement.value;
  }

  onDeLinkedReasonsButtonClick(): void {
    if (!this.controlComponent.applicationNumber) {
      alert('Please enter the application number.');
      return;
    }
    this.controlComponent.getReasonComments(this.controlComponent.applicationNumber).subscribe(
      (comments) => {
        if (comments.length > 0) {
          this.controlComponent.reasonComments = comments;
          this.controlComponent.showReasonCommentsSection = true;
          this.controlComponent.navigateToField('REASON_COMMENTS');
        } else {
          this.controlComponent.message = 'No comments found for the given application number.';
        }
      },
      (error) => {
        console.error('Error fetching reason comments:', error);
        this.controlComponent.message = 'An error occurred while fetching reason comments.';
      }
    );
  }

  onRequirementDetailButtonClick(): void {
    if (!this.proposalNumber) {
      alert('Please enter the proposal no');
      this.controlComponent.navigateToField('proposalNumber');
      return;
    }
    this.controlService.getRequirementDetails(this.proposalNumber).subscribe(
      (details) => {
        if (details.length > 0) {
          this.requirementDetails = details;
        } else {
          this.message = 'No details found for the given proposal number.';
        }
      },
      (error) => {
        console.error('Error fetching requirement details:', error);
        this.message = 'An error occurred while fetching requirement details.';
      }
    );
  }

  onProposalNumberInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.proposalNumber = inputElement.value;
  }

  onScrutinyStatusButtonClick(): void {
    if (!this.controlComponent.applicationNumber) {
      alert('Please enter the application number.');
      return;
    }
    this.router.navigate(['/scrutiny-status']).then(() => {
      this.scrutinyStatusComponent.loadScrutinyStatus(this.controlComponent.applicationNumber);
    });
  }

  onProposalMedicalStatusClick(): void {
    this.controlComponent.clearCustomerCallHistory();
    this.controlService.getCustomerCallHistory(this.proposalNumber).subscribe(
      (history) => {
        this.controlComponent.populateCustomerCallHistory(history);
        this.router.navigate(['/crm-exit']);
      },
      (error) => {
        console.error('Error fetching customer call history:', error);
        this.controlComponent.message = 'An error occurred while fetching customer call history.';
      }
    );
  }

  navigateToCustomerCallHistory(): void {
    this.router.navigate(['/customer-call-history']);
  }

  navigateToEmailLog(): void {
    this.router.navigate(['/emaillog']);
  }

  onStatusButtonClick(): void {
    const criteria = this.controlComponent.getSearchCriteria();
    if (!criteria.applicationNumber && !criteria.receiptNumber && !criteria.proposalNumber && !criteria.scrutinyNumber && !criteria.biNumber) {
      alert('Please provide at least one search criterion.');
      return;
    }
    this.controlService.getReceiptDetails(criteria).subscribe(
      (details) => {
        if (details.length > 0) {
          this.controlComponent.displayReceiptDetails(details);
        } else {
          this.controlComponent.message = 'No details found for the given criteria.';
        }
      },
      (error) => {
        console.error('Error fetching receipt details:', error);
        this.controlComponent.message = 'An error occurred while fetching receipt details.';
      }
    );
  }

  onEiaDetailsButtonClick(): void {
    this.controlComponent.clearEiaBlock();
    this.router.navigate(['/eia-view']).then(() => {
      this.controlService.getEiaDetails(this.controlComponent.applicationNumber).subscribe(
        (eiaDetails) => {
          this.controlComponent.populateEiaDetails(eiaDetails);
        },
        (error) => {
          console.error('Error fetching EIA details:', error);
          this.controlComponent.message = 'An error occurred while fetching EIA details.';
        }
      );
    });
  }

  onEventStatusChange(eventStatus: string, eventNumber: string, proposalNumber: string, truncatedDate: string): void {
    if (eventStatus === 'PROPOSAL UPDATED') {
      this.globalCounter++;
      this.controlComponent.showField('eventDescription');
      this.controlComponent.updateEventDescription(`Activity for event ${eventNumber}, proposal ${proposalNumber} on ${truncatedDate}`);
    } else {
      if (this.controlComponent.isFieldVisible('eventDescription')) {
        this.controlComponent.hideField('eventDescription');
      }
      this.globalCounter = Math.max(0, this.globalCounter - 1);
    }
  }

  navigateToStatusTracking(): void {
    this.router.navigate(['/status-tracking']);
  }

  onViewDataEnrichmentClick(): void {
    const params = {
      APPLICATION_NO: this.controlComponent.applicationNumber,
      call_form_name: 'STATUS_QUERY_SCREEN'
    };
    this.router.navigate(['/azbj_data_enrich_form'], { queryParams: params });
  }

  navigateToRequirementDespatch(): void {
    this.router.navigate(['/requirement-despatch']);
  }

  navigateToEia(): void {
    this.router.navigate(['/eia-view']);
  }
}
