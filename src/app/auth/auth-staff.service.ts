import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthStaffService {

  private _registerStaffURL = "api/staff_register"
  private _loginStaffURL = "api/staff_login"
  constructor(private http: HttpClient,
    private _route: Router) { }

  register_staff(user: any) {
    return this.http.post<any>(this._registerStaffURL, user)
  }

  login_staff(user: any) {
    return this.http.post<any>(this._loginStaffURL, user)
  }

  logged_in_staff() {
    return !!localStorage.getItem('token_staff')
  }

  logout_staff() {
    localStorage.removeItem('token_staff')
    this._route.navigate(['/home'])
  }

  get_staff_token() {
    return localStorage.getItem('token_staff')
  }
}
