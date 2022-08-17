import { Component } from '@angular/core';
import { AuthStudentService } from "../app/auth/auth-student.service";
import { AuthStaffService } from "../app/auth/auth-staff.service";
import { AuthAdminService } from "../app/auth/auth-admin.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sch-mngt-sys';

  constructor(protected _authStudent: AuthStudentService,
    protected _authStaff: AuthStaffService,
    protected _authAdmin: AuthAdminService) { }
}
