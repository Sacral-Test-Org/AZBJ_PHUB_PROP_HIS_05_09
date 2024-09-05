import { Component, OnInit } from '@angular/core';
import { UWService } from '../../services/uw.service';
import { UWData } from '../../shared/models/uw-data.model';

@Component({
  selector: 'app-uw',
  templateUrl: './uw.component.html',
  styleUrls: ['./uw.component.css']
})
export class UWComponent implements OnInit {
  uwData: UWData[] = [];

  constructor(private uwService: UWService) {}

  ngOnInit(): void {
    this.uwService.getUWData().subscribe((data: UWData[]) => {
      this.uwData = data.slice(0, 6); // Display up to six records
    });
  }

  formatUWField(uwData: UWData): string {
    let formattedText = uwData.text;
    if (formattedText.length > 2000) {
      formattedText = formattedText.substring(0, 2000);
    }
    return formattedText;
  }
}
