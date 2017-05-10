import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ChatsComponent } from './chats/chats.component';
import { HomeComponent } from "./home.component";
import { NotFoundComponent } from "./not-found.component";


import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core';
import { ChatsModule } from './chats';

import { AuthService } from './auth';
import { UserService } from './auth/user';
import { AuthGuard } from './auth';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    CoreModule,
    ChatsModule

  ],
  providers: [AuthGuard, AuthService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
