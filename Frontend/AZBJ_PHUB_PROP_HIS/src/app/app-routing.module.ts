import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControlComponent } from './features/control/control.component';
import { TeleVerificationHistoryComponent } from './features/tele-verification-history/tele-verification-history.component';
import { MedicalStatusComponent } from './features/medical-status/medical-status.component';
import { ScrutinyStatusComponent } from './features/scrutiny-status/scrutiny-status.component';
import { PanApproveDetailsComponent } from './features/pan-approve-details/pan-approve-details.component';
import { MainHubDetailsComponent } from './features/main-hub-details/main-hub-details.component';
import { EventTrackingComponent } from './features/event-tracking/event-tracking.component';
import { UWComponent } from './features/uw/uw.component';
import { CDAComponent } from './features/cda/cda.component';
import { RequirementDespatchComponent } from './features/requirement-despatch/requirement-despatch.component';
import { ReasonCommentsComponent } from './features/reason-comments/reason-comments.component';
import { AzbjDataEnrichFormComponent } from './features/azbj-data-enrich-form/azbj-data-enrich-form.component';
import { BlkRiAssignedComponent } from './features/blk-ri-assigned/blk-ri-assigned.component';
import { EiaComponent } from './features/eia/eia.component';

const routes: Routes = [
  { path: 'control', component: ControlComponent },
  { path: 'tele-verification-history', component: TeleVerificationHistoryComponent },
  { path: 'CAN_HUB_DETAILS', component: ControlComponent },
  { path: 'medical-status', component: MedicalStatusComponent },
  { path: 'control/emaillog', component: ControlComponent },
  { path: 'scrutiny-status', component: ScrutinyStatusComponent },
  { path: 'customer-call-history', component: ControlComponent },
  { path: 'eia-view', component: ControlComponent },
  { path: 'pan-approve-details', component: PanApproveDetailsComponent },
  { path: 'main-hub-details', component: MainHubDetailsComponent },
  { path: 'event-tracking', component: EventTrackingComponent },
  { path: 'uw', component: UWComponent },
  { path: 'cda', component: CDAComponent },
  { path: 'requirement-despatch', component: RequirementDespatchComponent },
  { path: 'reason-comments', component: ReasonCommentsComponent },
  { path: 'azbj_data_enrich_form', component: AzbjDataEnrichFormComponent },
  { path: 'blk-ri-assigned', component: BlkRiAssignedComponent },
  { path: 'eia', component: EiaComponent },
  { path: 'search-control-item', component: ControlComponent },
  { path: '', redirectTo: '/control', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
