import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdminDetailComponent } from './admin-detail/admin-detail.component';
import { AppointmentCalendarComponent } from './appointment-calendar/appointment-calendar.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap/modal/modal.module';
import { DropdownDirective } from './shared/app-dropdown.directive';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminReportsComponent } from './admin-reports/admin-reports.component';
import { AdminStaffComponent } from './admin-staff/admin-staff.component';
import { AdminSettingsComponent } from './admin-settings/admin-settings.component';
import { AppRoutingModule } from './app-routing.module';
 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AdminDetailComponent,
    AppointmentCalendarComponent,
    AdminHeaderComponent,
    DropdownDirective,
    AdminDashboardComponent,
    AdminReportsComponent,
    AdminStaffComponent,
    AdminSettingsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModalModule.forRoot(),
    CalendarModule.forRoot(),
    NgbModule.forRoot()
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
