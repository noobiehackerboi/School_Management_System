import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from 'rxjs';
import { AuthStudentService } from './auth/auth-student.service';
import { AuthStaffService } from './auth/auth-staff.service';
import { AuthAdminService } from './auth/auth-admin.service';

@Injectable()
export class TokenInterceptorServiceStudent implements HttpInterceptor {

  constructor(private _authStudent: AuthStudentService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(this._authStudent.get_student_token())
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this._authStudent.get_student_token()}`
      }
    })
    return next.handle(tokenizedReq)
  }
}

@Injectable()
export class TokenInterceptorServiceStaff implements HttpInterceptor {

  constructor(private _authStaff: AuthStaffService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this._authStaff.get_staff_token()}`
      }
    })
    return next.handle(tokenizedReq)
  }
}

@Injectable()
export class TokenInterceptorServiceAdmin implements HttpInterceptor {

  constructor(private _authAdmin: AuthAdminService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this._authAdmin.get_admin_token()}`
      }
    })
    return next.handle(tokenizedReq)
  }
}