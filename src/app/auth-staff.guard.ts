import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthStaffService } from '../app/auth/auth-staff.service';

@Injectable({
  providedIn: 'root'
})
export class AuthStaffGuard implements CanActivate {
  constructor(private _authService: AuthStaffService,
    private _route: Router) {
  }
  canActivate():boolean {
    if(this._authService.logged_in_staff()){
      return true
    }else{
      this._route.navigate(['/login_staff'])
      return false
    }
  }

}
