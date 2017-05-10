import { Component } from '@angular/core';

@Component({
  selector: 'ct-home',
  template: `<h1>Welcome to Chat Application</h1>
   <img src='../assets/images/chat.svg'  alt="chat" />`,
  styles: [`
    :host {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    h1 {
      text-align: center;
      color: #999;
    }
  `]
})

export class HomeComponent {}
