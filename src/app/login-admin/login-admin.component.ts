import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthAdminService } from "../auth/auth-admin.service";

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  admin = {
    admin_id: '',
    password: ''
  }
  constructor(private _auth: AuthAdminService,
    private _route: Router) { }

  ngOnInit(): void {
  }

  login_admin() {
    return this._auth.login_admin(this.admin)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token_admin', res.token_admin)
          this._route.navigate(['/dashboard_admin'])
        },
        err => console.log(err)
      )
  }
}
