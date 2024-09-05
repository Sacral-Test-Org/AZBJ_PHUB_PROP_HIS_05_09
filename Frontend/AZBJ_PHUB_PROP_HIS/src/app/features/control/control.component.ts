import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ControlService } from '../../services/control.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {
  application_no: string = '';
  user_id: string = '';
  physical_policy_bond: string = '';
  isReceiptVisible: boolean = true;
  isLanNoVisible: boolean = false;
  isPhysicalCopyOptedVisible: boolean = false;
  physicalCopyOptedText: string = '';
  isConvertedVisible: boolean = false;
  isViewBagicPolicyStatusVisible: boolean = false;
  isReconciliationStatusVisible: boolean = false;
  isEIACaseVisible: boolean = false;
  isDELinkedReasonsVisible: boolean = false;
  isVerificationStatusVisible: boolean = false;
  isVerificationUserDateVisible: boolean = false;
  isAutoBBUFlagVisible: boolean = false;
  isCompanyNameVisible: boolean = false;
  isCorrectionDoneCaseVisible: boolean = false;
  isEnrichmentStatusVisible: boolean = false;
  isEIARejectionFlagVisible: boolean = false;
  isDifferentStateVisible: boolean = false;
  isModuleFlagVisible: boolean = false;
  isModePIVCVisible: boolean = false;
  isApprovedReasonVisible: boolean = false;
  isExistingCustomerVisible: boolean = false;
  isPASAFlagVisible: boolean = false;
  isPartialPASAVisible: boolean = false;
  isNRIGSTWaiverVisible: boolean = false;
  isPIVCFlagVisible: boolean = false;
  isTermBuddyFlagVisible: boolean = false;
  isOptedSumAssuredVisible: boolean = false;
  isPIVCFlagPHVisible: boolean = false;
  isPennyDropSuccessVisible: boolean = false;
  isPennyDropFailVisible: boolean = false;
  isDispatchStatusVisible: boolean = false;
  isDispatchDateVisible: boolean = false;
  isDeliveryDateVisible: boolean = false;
  isKYCFlagVisible: boolean = false;
  isPKYCVisible: boolean = false;
  isPASARTTagVisible: boolean = false;
  isRetentionFlagVisible: boolean = false;
  isEDCPersistencyFlagVisible: boolean = false;
  isMedicalVisible: boolean = false;
  isSegmentVisible: boolean = false;
  isGSIPFlagVisible: boolean = false;
  isDigitalCOfferStatusVisible: boolean = false;
  isWealthSegmentVisible: boolean = false;
  isUWFirstVisible: boolean = false;
  isEKYCEditVisible: boolean = false;
  isCKYCEditVisible: boolean = false;
  isPANAdharLinkVisible: boolean = false;
  isFamilyDiscountVisible: boolean = false;
  isSSSFlagVisible: boolean = false;
  isISNPFlagVisible: boolean = false;

  @ViewChild('receiptNoField') receiptNoField: ElementRef;
  @ViewChild('propNoField') propNoField: ElementRef;

  constructor(private controlService: ControlService, private router: Router) {}

  ngOnInit(): void {
    this.maximizeWindow();
    this.navigateToApplicationNoField();
    this.hideFields();
    this.checkUserId();
    this.getPhysicalPolicyBond();
  }

  maximizeWindow(): void {
    window.moveTo(0, 0);
    window.resizeTo(screen.width, screen.height);
  }

  navigateToApplicationNoField(): void {
    const applicationNoField = document.getElementById('application_no');
    if (applicationNoField) {
      applicationNoField.focus();
    }
  }

  hideFields(): void {
    this.isReceiptVisible = false;
    this.isPhysicalCopyOptedVisible = false;
    this.isConvertedVisible = false;
    this.isViewBagicPolicyStatusVisible = false;
    this.isReconciliationStatusVisible = false;
    this.isEIACaseVisible = false;
    this.isDELinkedReasonsVisible = false;
    this.isVerificationStatusVisible = false;
    this.isVerificationUserDateVisible = false;
    this.isAutoBBUFlagVisible = false;
    this.isCompanyNameVisible = false;
    this.isCorrectionDoneCaseVisible = false;
    this.isEnrichmentStatusVisible = false;
    this.isEIARejectionFlagVisible = false;
    this.isDifferentStateVisible = false;
    this.isModuleFlagVisible = false;
    this.isModePIVCVisible = false;
    this.isApprovedReasonVisible = false;
    this.isExistingCustomerVisible = false;
    this.isPASAFlagVisible = false;
    this.isPartialPASAVisible = false;
    this.isNRIGSTWaiverVisible = false;
    this.isPIVCFlagVisible = false;
    this.isTermBuddyFlagVisible = false;
    this.isOptedSumAssuredVisible = false;
    this.isPIVCFlagPHVisible = false;
    this.isPennyDropSuccessVisible = false;
    this.isPennyDropFailVisible = false;
    this.isDispatchStatusVisible = false;
    this.isDispatchDateVisible = false;
    this.isDeliveryDateVisible = false;
    this.isKYCFlagVisible = false;
    this.isPKYCVisible = false;
    this.isPASARTTagVisible = false;
    this.isRetentionFlagVisible = false;
    this.isEDCPersistencyFlagVisible = false;
    this.isMedicalVisible = false;
    this.isSegmentVisible = false;
    this.isGSIPFlagVisible = false;
    this.isDigitalCOfferStatusVisible = false;
    this.isWealthSegmentVisible = false;
    this.isUWFirstVisible = false;
    this.isEKYCEditVisible = false;
    this.isCKYCEditVisible = false;
    this.isPANAdharLinkVisible = false;
    this.isFamilyDiscountVisible = false;
    this.isSSSFlagVisible = false;
    this.isISNPFlagVisible = false;
  }

  checkUserId(): void {
    if (this.user_id.startsWith('P00') || this.user_id.startsWith('UU')) {
      this.isLanNoVisible = true;
    }
  }

  getPhysicalPolicyBond(): void {
    this.controlService.getPhysicalPolicyBond(this.application_no).subscribe((value: string) => {
      this.physical_policy_bond = value;
      if (this.physical_policy_bond === 'Y') {
        this.physicalCopyOptedText = 'PHYSICAL_COPY_OPTED';
        this.isPhysicalCopyOptedVisible = true;
      } else if (this.physical_policy_bond === 'N') {
        this.physicalCopyOptedText = 'DIGITAL_COPY_OPTED';
        this.isPhysicalCopyOptedVisible = true;
      }
    });
  }

  onExitButtonClick(): void {
    window.close();
  }

  handleReceiptNoInput(): void {
    const receiptNo = this.receiptNoField.nativeElement.value;
    if (receiptNo.length > 30) {
      alert('Receipt No cannot exceed 30 characters');
      return;
    }
    const paddedReceiptNo = receiptNo.padStart(10, '0');
    this.receiptNoField.nativeElement.value = paddedReceiptNo;
    this.propNoField.nativeElement.focus();
  }

  showPhysicalCopyOpted(): void {
    this.isPhysicalCopyOptedVisible = true;
  }

  showConverted(): void {
    this.isConvertedVisible = true;
  }

  showViewBagicPolicyStatus(): void {
    this.isViewBagicPolicyStatusVisible = true;
  }

  showReconciliationStatus(): void {
    this.isReconciliationStatusVisible = true;
  }

  showEIACase(): void {
    this.isEIACaseVisible = true;
  }

  showDELinkedReasons(): void {
    this.isDELinkedReasonsVisible = true;
  }

  showVerificationStatus(): void {
    this.isVerificationStatusVisible = true;
  }

  showVerificationUserDate(): void {
    this.isVerificationUserDateVisible = true;
  }

  showAutoBBUFlag(): void {
    this.isAutoBBUFlagVisible = true;
  }

  showCompanyName(): void {
    this.isCompanyNameVisible = true;
  }

  showCorrectionDoneCase(): void {
    this.isCorrectionDoneCaseVisible = true;
  }

  showEnrichmentStatus(): void {
    this.isEnrichmentStatusVisible = true;
  }

  showEIARejectionFlag(): void {
    this.isEIARejectionFlagVisible = true;
  }

  showDifferentState(): void {
    this.isDifferentStateVisible = true;
  }

  showModuleFlag(): void {
    this.isModuleFlagVisible = true;
  }

  showModePIVC(): void {
    this.isModePIVCVisible = true;
  }

  showApprovedReason(): void {
    this.isApprovedReasonVisible = true;
  }

  showExistingCustomer(): void {
    this.isExistingCustomerVisible = true;
  }

  showPASAFlag(): void {
    this.isPASAFlagVisible = true;
  }

  showPartialPASA(): void {
    this.isPartialPASAVisible = true;
  }

  showNRIGSTWaiver(): void {
    this.isNRIGSTWaiverVisible = true;
  }

  showPIVCFlag(): void {
    this.isPIVCFlagVisible = true;
  }

  showTermBuddyFlag(): void {
    this.isTermBuddyFlagVisible = true;
  }

  showOptedSumAssured(): void {
    this.isOptedSumAssuredVisible = true;
  }

  showPIVCFlagPH(): void {
    this.isPIVCFlagPHVisible = true;
  }

  showPennyDropSuccess(): void {
    this.isPennyDropSuccessVisible = true;
  }

  showPennyDropFail(): void {
    this.isPennyDropFailVisible = true;
  }

  showDispatchStatus(): void {
    this.isDispatchStatusVisible = true;
  }

  showDispatchDate(): void {
    this.isDispatchDateVisible = true;
  }

  showDeliveryDate(): void {
    this.isDeliveryDateVisible = true;
  }

  showKYCFlag(): void {
    this.isKYCFlagVisible = true;
  }

  showPKYC(): void {
    this.isPKYCVisible = true;
  }

  showPASARTTag(): void {
    this.isPASARTTagVisible = true;
  }

  showRetentionFlag(): void {
    this.isRetentionFlagVisible = true;
  }

  showEDCPersistencyFlag(): void {
    this.isEDCPersistencyFlagVisible = true;
  }

  showMedical(): void {
    this.isMedicalVisible = true;
  }

  showSegment(): void {
    this.isSegmentVisible = true;
  }

  showGSIPFlag(): void {
    this.isGSIPFlagVisible = true;
  }

  showDigitalCOfferStatus(): void {
    this.isDigitalCOfferStatusVisible = true;
  }

  showWealthSegment(): void {
    this.isWealthSegmentVisible = true;
  }

  showUWFirst(): void {
    this.isUWFirstVisible = true;
  }

  showEKYCEdit(): void {
    this.isEKYCEditVisible = true;
  }

  showCKYCEdit(): void {
    this.isCKYCEditVisible = true;
  }

  showPANAdharLink(): void {
    this.isPANAdharLinkVisible = true;
  }

  showFamilyDiscount(): void {
    this.isFamilyDiscountVisible = true;
  }

  showSSSFlag(): void {
    this.isSSSFlagVisible = true;
  }

  showISNPFlag(): void {
    this.isISNPFlagVisible = true;
  }

  onEiaDetailsClick(): void {
    this.clearEiaData();
    this.router.navigate(['/eia-status']);
    this.populateEiaStatusFields();
  }

  clearEiaData(): void {
    // Clear EIA block data without validation
  }

  populateEiaStatusFields(): void {
    const applicationNo = this.application_no;
    this.controlService.getEiaStatus(applicationNo).subscribe(
      (data) => {
        // Populate EIA status fields with data
      },
      (error) => {
        alert('An error occurred while populating EIA data.');
      }
    );
  }
}