import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blk-ri-assigned',
  templateUrl: './blk-ri-assigned.component.html',
  styleUrls: ['./blk-ri-assigned.component.css']
})
export class BlkRiAssignedComponent {
  constructor(private router: Router) {}

  handleExitButtonClick(): void {
    this.router.navigate(['/search-control-item']);
  }
}
