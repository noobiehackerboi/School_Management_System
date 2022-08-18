import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminService {

  private _registerAdminURL = "api/admin_register"
  private _loginAdminURL = "api/admin_login"
  constructor(private http: HttpClient,
    private _route: Router) { }

  register_admin(user: any) {
    return this.http.post<any>(this._registerAdminURL, user)
  }

  login_admin(user: any) {
    return this.http.post<any>(this._loginAdminURL, user)
  }

  logged_in_admin() {
    return !!localStorage.getItem('token_admin')
  }

  logout_admin() {
    localStorage.removeItem('token_admin')
    this._route.navigate(['/home'])
  }

  get_admin_token() {
    return localStorage.getItem('token_admin')
  }
}
