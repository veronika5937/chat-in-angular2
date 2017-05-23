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
  joinedUser;
  onlineUsers;

  @Input() isSidebarOpen: boolean;

  constructor(private userService: UserService,
    private messageSocketService: MessageSocketService,
    private chatService: ChatService) { }

  ngOnInit() {
    this.users = this.userService.getAllUsers()

    if (!this.messageSocketService.socket) {
      this.messageSocketService.connect();
    }
    this.messageSocketService.joinUser()
      .subscribe(user => {
        this.popMessage(user);
      })

    this.messageSocketService.online()
      .subscribe(usernames => {
        this.onlineUsers = usernames
      })


    // filter chats
    this.subscription = this.chatService
      .getSearchValue()
      .subscribe(value => this.searchValue = value)
  }

  popMessage(user) {
    this.joinedUser = user;
    setTimeout(() => this.joinedUser = "", 12000)
  }

}
