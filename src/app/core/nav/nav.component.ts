import { Component, OnInit } from '@angular/core';
import { RouterModule, Router }  from '@angular/router';
import {UserService} from '../../auth/user';

@Component({
  selector: 'ct-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(
  private userService: UserService,
  private router: Router) { }

  ngOnInit() {
  }
  
  isLoggedIn(): boolean {
    return this.userService.isLoggedIn();
  }

  logout() {
    this.userService.removeUser();
    this.router.navigate(['/login'])
  }
}
