import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthStudentService {

  private _registerStudentURL = "http://localhost:3000/api/student_register";
  private _loginStudentURL = "http://localhost:3000/api/student_login"
  constructor(private http: HttpClient,
    private _route: Router) { }

  register_student(user: any) {
    return this.http.post<any>(this._registerStudentURL, user);
  }

  login_student(user: any) {
    return this.http.post<any>(this._loginStudentURL, user)
  }

  logged_in_student() {
    return !!localStorage.getItem('token_student')
  }

  logout_student() {
    localStorage.removeItem('token_student')
    this._route.navigate(['/home'])
  }

  get_student_token() {
    return localStorage.getItem('token_student')
  }
}
