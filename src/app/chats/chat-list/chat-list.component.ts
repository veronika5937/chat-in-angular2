import { Component, OnInit, Input } from '@angular/core';
import {UserService} from '../../auth/user';
import { ChatService } from "../chat.service";
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

  @Input() isSidebarOpen: boolean;
  constructor(private userService: UserService,
  private chatService: ChatService) { }

  ngOnInit() {
    this.users = this.userService.getAllUsers();
    // filter chats
    this.subscription = this.chatService
      .getSearchValue()
      .subscribe(value => this.searchValue = value)
  }
}
