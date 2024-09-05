import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScrutinyStatusService } from '../../services/scrutiny-status.service';

@Component({
  selector: 'app-scrutiny-status',
  templateUrl: './scrutiny-status.component.html',
  styleUrls: ['./scrutiny-status.component.css']
})
export class ScrutinyStatusComponent implements OnInit {
  scrutinyStatus: any;

  constructor(private scrutinyStatusService: ScrutinyStatusService, private router: Router) { }

  ngOnInit(): void {
    this.scrutinyStatusService.getScrutinyStatus().subscribe(data => {
      this.scrutinyStatus = data;
    });
  }

  exit(): void {
    this.router.navigate(['/status-tracking']);
  }
}
