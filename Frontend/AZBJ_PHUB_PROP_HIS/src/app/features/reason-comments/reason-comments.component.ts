import { Component, OnInit } from '@angular/core';
import { ReasonCommentsService } from '../../services/reason-comments.service';
import { ReasonComment } from '../../shared/models/reason-comment.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reason-comments',
  templateUrl: './reason-comments.component.html',
  styleUrls: ['./reason-comments.component.css']
})
export class ReasonCommentsComponent implements OnInit {
  reasonComments: ReasonComment[] = [];
  currentApplicationNo: string = '12345'; // This should be dynamically fetched

  constructor(private reasonCommentsService: ReasonCommentsService, private router: Router) {}

  ngOnInit(): void {
    this.fetchReasonComments();
  }

  fetchReasonComments(): void {
    this.reasonCommentsService.getReasonComments().subscribe(
      (data: ReasonComment[]) => {
        this.reasonComments = data;
        if (this.reasonComments.length > 0) {
          this.navigateToFirstRecord();
        }
      },
      (error) => {
        console.error('Error fetching reason comments', error);
      }
    );
  }

  loadMoreComments(): void {
    this.reasonCommentsService.getMoreReasonComments().subscribe(
      (data: ReasonComment[]) => {
        this.reasonComments = [...this.reasonComments, ...data];
      },
      (error) => {
        console.error('Error loading more reason comments', error);
      }
    );
  }

  exit(): void {
    // Logic to handle exit button click
    console.log('Exit button clicked');
    // Navigate away or close the form
    this.onExitClick();
  }

  viewDataEnrichment(): void {
    // Logic to handle View Data Enrichment button click
    console.log('View Data Enrichment button clicked');
    this.onViewDataEnrichmentClick();
  }

  navigateToFirstRecord(): void {
    if (this.reasonComments.length > 0) {
      // Logic to navigate to the first record
      console.log('Navigating to the first record:', this.reasonComments[0]);
    }
  }

  onExitClick(): void {
    // Hide the current view and navigate to the search control item
    this.router.navigate(['search-control-item']);
  }

  onViewDataEnrichmentClick(): void {
    // Check if a parameter list named 'params' already exists
    let params = sessionStorage.getItem('params');
    if (params) {
      sessionStorage.removeItem('params');
    }

    // Create a new parameter list named 'params'
    const newParams = {
      APPLICATION_NO: this.currentApplicationNo,
      call_form_name: 'STATUS_QUERY_SCREEN'
    };
    sessionStorage.setItem('params', JSON.stringify(newParams));

    // Navigate to the new form named 'azbj_data_enrich_form' with the provided parameters
    this.router.navigate(['azbj_data_enrich_form'], { queryParams: newParams });
  }
}
