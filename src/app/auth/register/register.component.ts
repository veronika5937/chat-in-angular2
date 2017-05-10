import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import {AuthService} from "../auth.service";
import { Router } from "@angular/router";
import { User } from "./register.interface";


// Custom Validator for email
function emailInvalid(control): { [s: string]: boolean } {
  const pattern = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  if (!control.value.match(pattern) && control.value.length > 0) {
    return { emailInvalid: true };
  }
}

// Custom Validator for password
function passwordInvalid(control): { [s: string]: boolean } {
  const pat = new RegExp("^(?=.*[a-zA-Z])(?=.*[0-9])");
  if (!control.value.match(pat) && control.value.length > 0) {
    return { passwordInvalid: true };
  }
}

// Custom Validator for password match
function matchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
  return (group: FormGroup) => {
    let passwordInput = group.controls[passwordKey];
    let passwordConfirmationInput = group.controls[passwordConfirmationKey];
    let confirmLength = passwordConfirmationInput.value.length;
    if (passwordInput.value !== passwordConfirmationInput.value && confirmLength > 0) {
      return passwordConfirmationInput.setErrors({ notEquivalent: true })
    }
  }
}


@Component({
  selector: 'ct-register',
  templateUrl: './register.component.html',
  styleUrls: ['../auth.component.css'],
})



export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      'name': ['', [Validators.required, Validators.minLength(3)]],
      'email': ['', [Validators.required, emailInvalid]],
      'password': ['', [Validators.required,
      Validators.minLength(6),
        passwordInvalid]
      ],

      'passwordConfirm': ['', Validators.required,]

    }, { validator: matchingPasswords('password', 'passwordConfirm') });

  }


  onSubmit(form) { 
    const data : User = {
      "username" : form.name,
      "email": form.email,
      "password" : form.password
    }

    this.authService
    .register(data)
    .subscribe(this.onRegisterSuccess.bind(this), this.onRegisterError)
  }

  private onRegisterSuccess(res: any): void {
    console.log(res)
     alert('Registration successful')
     this.router.navigate(['/login']);
  }

  private onRegisterError(err: any): void {
    console.error(err);
  }

}
