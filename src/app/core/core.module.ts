import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule }  from '@angular/router';
import { NavComponent } from './nav';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavComponent
  ],
  declarations: [
    NavComponent
  ],
  providers: [ ]
})

export class CoreModule { }