import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { AdminSettingsComponent } from './admin-settings/admin-settings.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminReportsComponent } from './admin-reports/admin-reports.component';
import { AdminStaffComponent } from './admin-staff/admin-staff.component';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

const appRoutes : Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch:'full'},
    { path: 'dashboard', component : AdminDashboardComponent},
    { path: 'reports', component : AdminReportsComponent},
    { path: 'staff', component : AdminStaffComponent},
    { path: 'settings', component : AdminSettingsComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports : [RouterModule]  
})
export class AppRoutingModule {
    
}