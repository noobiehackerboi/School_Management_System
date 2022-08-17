import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthAdminService } from './auth/auth-admin.service';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminGuard implements CanActivate {
  constructor(private _authService: AuthAdminService,
    private _route: Router) {
  }
  canActivate():boolean {
    if(this._authService.logged_in_admin()){
      return true
    }else{
      this._route.navigate(['/login_admin'])
      return false
    }
  }
}
