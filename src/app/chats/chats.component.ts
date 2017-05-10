import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ct-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {
  isSidebarOpen: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onSidebarOpen(event: boolean) {
    this.isSidebarOpen = event;
  }
}
