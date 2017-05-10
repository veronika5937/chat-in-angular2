import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from "@angular/router";

import { UserService } from "../user";
import { AuthService } from "../auth.service";
import { User } from "./login.interface";

// Validator for password
function passwordInvalid(control): { [s: string]: boolean } {
  const pat = new RegExp("^(?=.*[a-zA-Z])(?=.*[0-9])");
  if (!control.value.match(pat) && control.value.length > 0) {
    return { passwordInvalid: true };
  }
}

@Component({
  selector: 'ct-login',
  templateUrl: './login.component.html',
  styleUrls: ['../auth.component.css']
})


export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
    private userService: UserService,
    private authService: AuthService,
    private router: Router) { }



  ngOnInit() {
    this.loginForm = this.fb.group({
      'name': ['', [Validators.required, Validators.minLength(3)]],
      'password': ['', [Validators.required,
      Validators.minLength(6),
        passwordInvalid]
      ],
    })
  }

  onSubmit(form) {
    const data: User = {
      "username": form.name,
      "password": form.password
    }
    this.authService
      .login(data)
      .subscribe(this.onLoginSuccess.bind(this), this.onLoginError)
  }

  private onLoginSuccess(res: any): void {
    this.userService.setUser(res);
    this.router.navigate(['chat']);
  }

  private onLoginError(err: any): void {
    if (err.status === 404) {
      alert('User not found')
    }
    console.error(err);
  }

}

