import { Component, OnInit } from '@angular/core';
import { MessageSocketService } from '../messages/message-socket.service';
import { Subscription } from "rxjs";

@Component({
  selector: 'ct-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {
  isSidebarOpen: boolean = false;
  joinedUser;
  leaveUser;
  constructor(private messageSocketService: MessageSocketService) { }


  ngOnInit() {
    if (!this.messageSocketService.socket) {
      this.messageSocketService.connect();
    }
    this.messageSocketService.joinUser()
      .subscribe(joinedUser => {
        this.popMessage(joinedUser);
      })


    this.messageSocketService.leaveUser()
      .subscribe(leaveUser => {
        this.leaveUser = leaveUser;
      })
 
   }
 
  onSidebarOpen(event: boolean) {
    this.isSidebarOpen = event;
  }

   popMessage(joinedUser) {
    this.joinedUser = joinedUser;
    setTimeout(() => this.joinedUser = "", 12000)
  }

}

  

  