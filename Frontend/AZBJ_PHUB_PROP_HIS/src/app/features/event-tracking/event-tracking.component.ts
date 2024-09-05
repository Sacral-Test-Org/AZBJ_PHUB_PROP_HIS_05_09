import { Component, OnInit } from '@angular/core';
import { EventTrackingService } from '../../services/event-tracking.service';

@Component({
  selector: 'app-event-tracking',
  templateUrl: './event-tracking.component.html',
  styleUrls: ['./event-tracking.component.css']
})
export class EventTrackingComponent implements OnInit {
  globalCounter: number = 0;
  eventDescriptionVisible: boolean = false;
  eventDescription: string = '';

  constructor(private eventTrackingService: EventTrackingService) {}

  ngOnInit(): void {
    // Initialize component properties if needed
  }

  updateEventStatus(status: string, eventNumber: number, proposalNumber: number, truncatedDate: string): void {
    if (status === 'PROPOSAL UPDATED') {
      this.globalCounter += 1;
      this.eventDescriptionVisible = true;
      this.eventDescription = `Activity description for event ${eventNumber}, proposal ${proposalNumber} on ${truncatedDate}`;
    } else {
      if (this.eventDescriptionVisible) {
        this.eventDescriptionVisible = false;
        this.globalCounter = Math.max(0, this.globalCounter - 1);
      }
    }
  }
}
