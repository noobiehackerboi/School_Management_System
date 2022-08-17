import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginStudentComponent } from './login-student/login-student.component';
import { LoginStaffComponent } from './login-staff/login-staff.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { HomeComponent } from './home/home.component';
import { NoticeComponent } from './notice/notice.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AdmissionComponent } from './admission/admission.component';
import { HolidayComponent } from './holiday/holiday.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AchievementsComponent } from './achievements/achievements.component';
import { RegisterStudentComponent } from './register-student/register-student.component';
import { RegisterStaffComponent } from './register-staff/register-staff.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { FooterComponent } from './footer/footer.component';
import { AuthStudentService } from './auth/auth-student.service';
import { DashboardStudentComponent } from './dashboard/dashboard-student/dashboard-student.component';
import { DashboardStaffComponent } from './dashboard/dashboard-staff/dashboard-staff.component';
import { DashboardAdminComponent } from './dashboard/dashboard-admin/dashboard-admin.component';
import { AuthStaffService } from './auth/auth-staff.service';
import { AuthAdminService } from './auth/auth-admin.service';
import { AuthStudentGuard } from './auth-student.guard';
import { AuthStaffGuard } from './auth-staff.guard';
import { AuthAdminGuard } from './auth-admin.guard';
import { TokenInterceptorServiceAdmin, TokenInterceptorServiceStaff, TokenInterceptorServiceStudent } from './token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginStudentComponent,
    LoginStaffComponent,
    LoginAdminComponent,
    HomeComponent,
    NoticeComponent,
    AboutComponent,
    ContactComponent,
    AdmissionComponent,
    HolidayComponent,
    AchievementsComponent,
    RegisterStudentComponent,
    RegisterStaffComponent,
    RegisterAdminComponent,
    FooterComponent,
    DashboardStudentComponent,
    DashboardStaffComponent,
    DashboardAdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthStudentService, AuthStaffService, AuthAdminService, AuthStudentGuard, AuthStaffGuard, AuthAdminGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorServiceStudent,
      multi: true
    }, {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorServiceStaff,
      multi: true
    }, {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorServiceAdmin,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
