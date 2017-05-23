import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../auth/user';
import { ChatService } from "../chat.service";
import { MessageSocketService } from '../../messages/message-socket.service';
import { Subscription } from "rxjs";

@Component({
  selector: 'ct-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {
  private searchValue: string = 'veronika';
  private subscription: Subscription;
  users;
  onlineUsers = [];

  @Input() isSidebarOpen: boolean;

  constructor(private userService: UserService,
    private messageSocketService: MessageSocketService,
    private chatService: ChatService) { }

  ngOnInit() {
    this.users = this.userService.getAllUsers();
    
    //user  online status
    this.messageSocketService.online()
      .subscribe((usernames: string[]) => {
        this.onlineUsers = usernames
      })


    // filter chats
    this.subscription = this.chatService
      .getSearchValue()
      .subscribe(value => this.searchValue = value)
  }

}
