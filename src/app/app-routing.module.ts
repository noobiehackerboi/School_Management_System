import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { AdmissionComponent } from './admission/admission.component';
import { AuthAdminGuard } from './auth-admin.guard';
import { AuthStaffGuard } from './auth-staff.guard';
import { AuthStudentGuard } from './auth-student.guard';
import { ContactComponent } from './contact/contact.component';
import { DashboardAdminComponent } from './dashboard/dashboard-admin/dashboard-admin.component';
import { DashboardStaffComponent } from './dashboard/dashboard-staff/dashboard-staff.component';
import { DashboardStudentComponent } from './dashboard/dashboard-student/dashboard-student.component';
import { HolidayComponent } from './holiday/holiday.component';
import { HomeComponent } from './home/home.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LoginStaffComponent } from './login-staff/login-staff.component';
import { LoginStudentComponent } from './login-student/login-student.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { RegisterStaffComponent } from './register-staff/register-staff.component';
import { RegisterStudentComponent } from './register-student/register-student.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'achievements',
    component: AchievementsComponent
  },
  {
    path: 'holiday',
    component: HolidayComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'admission',
    component: AdmissionComponent
  },
  {
    path: 'login_student',
    component: LoginStudentComponent
  },
  {
    path: 'login_staff',
    component: LoginStaffComponent
  },
  {
    path: 'login_admin',
    component: LoginAdminComponent
  },
  {
    path: 'register_student',
    component: RegisterStudentComponent
  },
  {
    path: 'register_staff',
    component: RegisterStaffComponent
  },
  {
    path: 'register_admin',
    component: RegisterAdminComponent
  },
  {
    path: 'dashboard_student',
    component: DashboardStudentComponent,
    canActivate: [AuthStudentGuard]
  },
  {
    path: 'dashboard_staff',
    component: DashboardStaffComponent,
    canActivate: [AuthStaffGuard]
  },
  {
    path: 'dashboard_admin',
    component: DashboardAdminComponent,
    canActivate: [AuthAdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
