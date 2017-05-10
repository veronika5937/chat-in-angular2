import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ChatsComponent } from './chats.component';
import { ChatListComponent } from './chat-list';
import { ChatDetailComponent } from './chat-detail';
import { ChatNavComponent } from './chat-nav';
import { MessagesModule } from "../messages";

import { FilterByNamePipe } from "./chat-filter.pipe";
import { ChatService } from "./chat.service";


@NgModule({
  declarations: [
    ChatsComponent,
    ChatListComponent,
    ChatDetailComponent,
    ChatNavComponent,
    FilterByNamePipe
  ],
  imports: [
    CommonModule,
    MessagesModule,
    FormsModule 
    
  ],
  providers: [
    ChatService 
  ]
})

export class ChatsModule { }
