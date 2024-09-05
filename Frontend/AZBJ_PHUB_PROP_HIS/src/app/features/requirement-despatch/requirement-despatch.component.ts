import { Component, OnInit } from '@angular/core';
import { RequirementDespatchService } from '../../services/requirement-despatch.service';
import { RequirementDespatch } from '../../shared/models/requirement-despatch.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-requirement-despatch',
  templateUrl: './requirement-despatch.component.html',
  styleUrls: ['./requirement-despatch.component.css']
})
export class RequirementDespatchComponent implements OnInit {
  requirements: RequirementDespatch[] = [];

  constructor(private requirementDespatchService: RequirementDespatchService, private router: Router) {}

  ngOnInit(): void {
    this.requirementDespatchService.getRequirements().subscribe(
      (data: RequirementDespatch[]) => {
        this.requirements = data;
        this.displayRequirements(this.requirements);
      },
      (error) => {
        console.error('Error fetching requirements', error);
      }
    );
  }

  displayRequirements(requirements: RequirementDespatch[]): void {
    // Logic to display the list of requirements in the HTML template
    // This can be handled by Angular's template binding
  }

  handleExit(): void {
    this.router.navigate(['/previous-screen']);
  }
}
