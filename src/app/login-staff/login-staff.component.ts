import { Component, OnInit } from '@angular/core';
import { AuthStaffService } from "../auth/auth-staff.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login-staff',
  templateUrl: './login-staff.component.html',
  styleUrls: ['./login-staff.component.css']
})
export class LoginStaffComponent implements OnInit {

  staff = {
    staff_id: '',
    password: '',
    email: ''
  }
  constructor(private _auth: AuthStaffService,
    private _route: Router) { }

  ngOnInit(): void {
  }

  login_staff() {
    return this._auth.login_staff(this.staff)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token_staff', res.token_staff)
          this._route.navigate(['/dashboard_staff'])
        },
        err => console.log(err)
      )
  }
}
