import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private http: LoginService,
    private snackBar: MatSnackBar
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.http.isAuthSuccess.getValue()) {
      return true; // User is authenticated, allow access to the route
    } else {
      // return false;
      // User is not authenticated, navigate to a login page or show a message
      // this.snackBar.open('please login to access this route');
      this.router.navigate(['']); // Change '/login' to your actual login route
      return false;
    }
  }
}
