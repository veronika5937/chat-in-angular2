import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageListComponent } from './message-list';
import { MessageNewComponent } from './message-new';

import { MessageSocketService } from './message-socket.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [MessageListComponent, MessageNewComponent],
  declarations: [
    MessageListComponent,
     MessageNewComponent
     ],
  providers: [MessageSocketService]
})
export class MessagesModule { }
