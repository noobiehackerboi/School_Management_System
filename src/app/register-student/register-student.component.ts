import { Component, OnInit } from '@angular/core';
import { AuthStudentService } from "../auth/auth-student.service";

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css']
})
export class RegisterStudentComponent implements OnInit {

  student = {
    student_id: '',
    email: '',
    password: ''
  }
  constructor(private _auth: AuthStudentService) { }

  message: boolean = false
  error: boolean = false
  ngOnInit(): void {
  }

  register_student() {
    this._auth.register_student(this.student)
      .subscribe(
        res => {
          console.log(res)
          this.student.student_id = ''
          this.student.password = ''
          this.student.email = ''
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
