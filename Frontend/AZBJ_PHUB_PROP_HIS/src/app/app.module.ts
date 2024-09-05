import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControlComponent } from './features/control/control.component';
import { ControlService } from './services/control.service';
import { TeleVerificationHistoryComponent } from './features/tele-verification-history/tele-verification-history.component';
import { TeleVerificationHistoryService } from './services/tele-verification-history.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { MedicalStatusComponent } from './features/medical-status/medical-status.component';
import { ScrutinyStatusComponent } from './features/scrutiny-status/scrutiny-status.component';
import { ScrutinyStatusService } from './services/scrutiny-status.service';
import { PanApproveDetailsComponent } from './features/pan-approve-details/pan-approve-details.component';
import { PanApproveDetailsService } from './services/pan-approve-details.service';
import { EventTrackingComponent } from './features/event-tracking/event-tracking.component';
import { EventTrackingService } from './services/event-tracking.service';
import { UWComponent } from './features/uw/uw.component';
import { UWService } from './services/uw.service';
import { CDAComponent } from './features/cda/cda.component';
import { RequirementDespatchComponent } from './features/requirement-despatch/requirement-despatch.component';
import { RequirementDespatchService } from './services/requirement-despatch.service';
import { ReasonCommentsComponent } from './features/reason-comments/reason-comments.component';
import { ReasonCommentsService } from './services/reason-comments.service';
import { BlkRiAssignedComponent } from './features/blk-ri-assigned/blk-ri-assigned.component';
import { EiaComponent } from './features/eia/eia.component';
import { EiaService } from './services/eia.service';

@NgModule({
  declarations: [
    AppComponent,
    ControlComponent,
    TeleVerificationHistoryComponent,
    MedicalStatusComponent,
    ScrutinyStatusComponent,
    PanApproveDetailsComponent,
    EventTrackingComponent,
    UWComponent,
    CDAComponent,
    RequirementDespatchComponent,
    ReasonCommentsComponent,
    BlkRiAssignedComponent,
    EiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    LoggerModule.forRoot({
      level: NgxLoggerLevel.DEBUG,
      serverLogLevel: NgxLoggerLevel.ERROR
    })
  ],
  providers: [
    ControlService,
    TeleVerificationHistoryService,
    ScrutinyStatusService,
    PanApproveDetailsService,
    EventTrackingService,
    UWService,
    RequirementDespatchService,
    ReasonCommentsService,
    EiaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
