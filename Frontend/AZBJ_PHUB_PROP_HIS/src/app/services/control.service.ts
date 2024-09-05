import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ControlService {
  private apiUrl = `${environment.apiUrl}/control`;

  constructor(private http: HttpClient) {}

  getPhysicalPolicyBond(application_no: string): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/physicalPolicyBond`, {
      params: { application_no }
    });
  }

  getConvertedField(application_no: string): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/convertedField`, {
      params: { application_no }
    });
  }

  getReconciliationStatus(application_no: string): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/reconciliationStatus`, {
      params: { application_no }
    });
  }

  getEiaCase(application_no: string): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/eiaCase`, {
      params: { application_no }
    });
  }

  getEventDescription(application_no: string): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/eventDescription`, {
      params: { application_no }
    });
  }

  getApplicationNo(application_no: string): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/applicationNo`, {
      params: { application_no }
    });
  }

  getReceiptNo(application_no: string): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/receiptNo`, {
      params: { application_no }
    });
  }

  getProposalNo(application_no: string): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/proposalNo`, {
      params: { application_no }
    });
  }

  getScrutinyNo(application_no: string): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/scrutinyNo`, {
      params: { application_no }
    });
  }

  getCurrentStatus(application_no: string): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/currentStatus`, {
      params: { application_no }
    });
  }

  getSubStatus(application_no: string): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/subStatus`, {
      params: { application_no }
    });
  }

  getPh(application_no: string): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/ph`, {
      params: { application_no }
    });
  }

  getIp(application_no: string): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/ip`, {
      params: { application_no }
    });
  }

  getBatchId(application_no: string): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/batchId`, {
      params: { application_no }
    });
  }

  getBbuAssignment(application_no: string): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/bbuAssignment`, {
      params: { application_no }
    });
  }

  getDeAssignment(application_no: string): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/deAssignment`, {
      params: { application_no }
    });
  }

  getReviewHoStatus(application_no: string): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/reviewHoStatus`, {
      params: { application_no }
    });
  }

  getDeDiscardStatus(application_no: string): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/deDiscardStatus`, {
      params: { application_no }
    });
  }

  getBbuDiscardStatus(application_no: string): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/bbuDiscardStatus`, {
      params: { application_no }
    });
  }

  getUwReason(application_no: string): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/uwReason`, {
      params: { application_no }
    });
  }

  getCvApprovedBy(application_no: string): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/cvApprovedBy`, {
      params: { application_no }
    });
  }

  getVerificationStatus(application_no: string): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/verificationStatus`, {
      params: { application_no }
    });
  }

  getVerificationUserDate(application_no: string): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/verificationUserDate`, {
      params: { application_no }
    });
  }

  getMergedBy(application_no: string): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/mergedBy`, {
      params: { application_no }
    });
  }

  getMergedDate(application_no: string): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/mergedDate`, {
      params: { application_no }
    });
  }

  getMergedSubStatus(application_no: string): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/mergedSubStatus`, {
      params: { application_no }
    });
  }

  getMergedRequestDate(application_no: string): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/mergedRequestDate`, {
      params: { application_no }
    });
  }

  getMergedStatus(application_no: string): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/mergedStatus`, {
      params: { application_no }
    });
  }

  getProposalPolicyStatus(application_no: string): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/proposalPolicyStatus`, {
      params: { application_no }
    });
  }

  getBwcQueryNo(application_no: string): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/bwcQueryNo`, {
      params: { application_no }
    });
  }

  getCvHoSubStatus(application_no: string): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/cvHoSubStatus`, {
      params: { application_no }
    });
  }

  getLanNo(application_no: string): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/lanNo`, {
      params: { application_no }
    });
  }

  getApproverK2Id(application_no: string): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/approverK2Id`, {
      params: { application_no }
    });
  }

  getRandomComments(application_no: string): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/randomComments`, {
      params: { application_no }
    });
  }

  getOtpFlag(application_no: string): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/otpFlag`, {
      params: { application_no }
    });
  }

  clearForm(): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/clearForm`, {});
  }

  makeApiCall(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/teleVerificationHistory`);
  }

  getPanApprovalDetails(applicationNumber: string): Observable<ApprovalDetails[]> {
    return this.http.get<ApprovalDetails[]>(`${this.apiUrl}/panApprovalDetails`, {
      params: { applicationNumber }
    });
  }

  getReasonComments(applicationNumber: string): Observable<ReasonComment[]> {
    const url = `${this.apiUrl}/reason-comments`;
    return this.http.get<ReasonComment[]>(url, {
      params: { applicationNumber }
    });
  }

  getRequirementDetails(proposalNumber: string): Observable<RequirementDetail[]> {
    const url = `${this.apiUrl}/requirement-details`;
    return this.http.get<RequirementDetail[]>(url, {
      params: { proposalNumber }
    });
  }

  getRemarks(applicationNumber: string): Observable<Remark[]> {
    return this.http.get<Remark[]>(`${this.apiUrl}/remarks/${applicationNumber}`);
  }

  getComments(policyNumber: string): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.apiUrl}/comments/${policyNumber}`);
  }

  // New method to download data to Excel
  downloadDataToExcel(): Observable<Blob> {
    const url = `${this.apiUrl}/downloadDataToExcel`;
    return this.http.get(url, { responseType: 'blob' });
  }

  // New method to validate BI Number and retrieve Application Number
  validateBiNumber(biNumber: string): Observable<{ applnNo: string }> {
    const url = `${this.apiUrl}/validateBiNumber`;
    return this.http.get<{ applnNo: string }>(url, {
      params: { biNumber }
    });
  }

  // New method to fetch email history records
  getEmailHistory(proposalNumber: string): Observable<EmailHistory[]> {
    const url = `${this.apiUrl}/emailHistory`;
    return this.http.get<EmailHistory[]>(url, {
      params: { proposalNumber }
    });
  }

  // New method to fetch receipt details
  getReceiptDetails(criteria: SearchCriteria): Observable<ReceiptDetails[]> {
    const url = `${this.apiUrl}/receiptDetails`;
    return this.http.get<ReceiptDetails[]>(url, {
      params: { ...criteria }
    });
  }
}

export interface ApprovalDetails {
  approvedUser: string;
  userName: string;
  apprvDate: string;
  apprvTime: string;
  status: string;
}

export interface ReasonComment {
  reason: string;
  comments: string;
  userId: string;
  commentDate: string;
}

export interface RequirementDetail {
  reqType: string;
  sysDesc: string;
  reqRaisedDate: string;
}

export interface Remark {
  remarks: string;
}

export interface Comment {
  comments: string;
}

export interface EmailHistory {
  tableData: string;
  mailFlag: string;
  updatedOn: string;
}

export interface SearchCriteria {
  application_no?: string;
  receipt_no?: string;
  proposal_no?: string;
  scrutiny_no?: string;
  bi_no?: string;
}

export interface ReceiptDetails {
  application_no: string;
  proposal_no: string;
  receipt_no: string;
  scrutiny_no: string;
  bi_no: string;
  eia_count: number;
  dispatch_status: string;
  partner_consent_status: string;
}