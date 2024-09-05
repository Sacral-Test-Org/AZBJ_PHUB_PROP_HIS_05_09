import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EiaService } from '../../services/eia.service';
import { EiaStatus } from '../../shared/models/eia-status.model';

@Component({
  selector: 'app-eia',
  templateUrl: './eia.component.html',
  styleUrls: ['./eia.component.css']
})
export class EiaComponent implements OnInit {
  eiaStatuses: EiaStatus[] = [];
  isViewHidden: boolean = false;

  constructor(private eiaService: EiaService, private router: Router) {}

  ngOnInit(): void {
    this.eiaService.getEiaProcessStatus().subscribe((data: EiaStatus[]) => {
      this.eiaStatuses = data;
    });
  }

  onExitClick(): void {
    this.isViewHidden = true;
    this.router.navigate(['/search-control-item']);
  }
}
