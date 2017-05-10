import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from "app/auth/auth.component";
import { AuthRoutingModule } from "app/auth/auth-routing.module";

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent,
        AuthComponent
    ],
    imports: [
        AuthRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule
        ],
    providers: []
})

export class AuthModule { }