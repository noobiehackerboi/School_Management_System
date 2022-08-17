import { Component, OnInit } from '@angular/core';
import { AuthAdminService } from "../auth/auth-admin.service";

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.css']
})
export class RegisterAdminComponent implements OnInit {

  admin = {
    admin_id: '',
    password: ''
  }

  message: boolean = false
  error: boolean = false
  constructor(private _auth: AuthAdminService) { }

  ngOnInit(): void {
  }

  register_admin() {
    return this._auth.register_admin(this.admin)
      .subscribe(
        res => {
          console.log(res)
          this.admin.admin_id = ''
          this.admin.password = ''
          this.message = true
          setTimeout(() => {
            this.message = false
          }, 5000);
        },
        err => {
          console.log(err)
          this.error = true
          setTimeout(() => {
            this.error = false
          }, 5000);
        }
      )
  }

  removeMessage() {
    this.message = false
  }
  removeError() {
    this.error = false
  }
}
