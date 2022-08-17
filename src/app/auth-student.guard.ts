import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthStudentService } from "../app/auth/auth-student.service";

@Injectable({
  providedIn: 'root'
})
export class AuthStudentGuard implements CanActivate {

  constructor(private _authService: AuthStudentService,
    private _route: Router) {
  }
  canActivate(): boolean {
    if (this._authService.logged_in_student()) {
      return true
    } else {
      this._route.navigate(['/login_student'])
      return false
    }
  }
}
