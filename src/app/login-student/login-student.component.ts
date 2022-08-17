import { Component, OnInit } from '@angular/core';
import { AuthStudentService } from "../auth/auth-student.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login-student',
  templateUrl: './login-student.component.html',
  styleUrls: ['./login-student.component.css']
})
export class LoginStudentComponent implements OnInit {

  student = {
    student_id: '',
    password: ''
  }
  constructor(private _auth: AuthStudentService,
    private _route: Router) { }

  ngOnInit(): void {
  }

  login_student() {
    this._auth.login_student(this.student)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token_student', res.token_student)
          this._route.navigate(['/dashboard_student'])
        },
        err => console.log(err)
      )
  }

}
