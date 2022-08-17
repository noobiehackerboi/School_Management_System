import { Component, OnInit } from '@angular/core';
import { AuthStaffService } from "../auth/auth-staff.service";

@Component({
  selector: 'app-register-staff',
  templateUrl: './register-staff.component.html',
  styleUrls: ['./register-staff.component.css']
})
export class RegisterStaffComponent implements OnInit {

  staff = {
    staff_id: '',
    email: '',
    password: ''
  }

  message: boolean = false
  error: boolean = false
  constructor(private _auth: AuthStaffService) { }

  ngOnInit(): void {
  }

  register_staff() {
    this._auth.register_staff(this.staff)
      .subscribe(
        res => {
          console.log(res)
          this.staff.staff_id = ''
          this.staff.password = ''
          this.staff.email = ''
          this.message = true
          setTimeout(() => {
            this.message = false
          }, 5000);
        },
        err => {
          console.log(err)
          this.error = true;
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