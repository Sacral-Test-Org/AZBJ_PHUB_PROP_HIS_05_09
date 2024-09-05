import { Component, OnInit } from '@angular/core';
import { CustomerCallHistoryService } from '../../services/customer-call-history.service';
import { Observable } from 'rxjs';
import { CallHistory } from '../../shared/models/call-history.model';

@Component({
  selector: 'app-customer-call-history',
  templateUrl: './customer-call-history.component.html',
  styleUrls: ['./customer-call-history.component.css']
})
export class CustomerCallHistoryComponent implements OnInit {
  callHistory$: Observable<CallHistory[]>;

  constructor(private customerCallHistoryService: CustomerCallHistoryService) { }

  ngOnInit(): void {
    this.getCallHistory();
  }

  getCallHistory(): void {
    this.callHistory$ = this.customerCallHistoryService.getCallHistory();
  }
}