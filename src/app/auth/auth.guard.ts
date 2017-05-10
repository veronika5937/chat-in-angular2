import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './user';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService,
    private router: Router) { }

  canActivate() {
    if (this.userService.isLoggedIn()) {
      return true;// logged in so return true
    } else {
      this.router.navigate(['login']); // not logged in so redirect to login page
      return false;
    }
  }
}
