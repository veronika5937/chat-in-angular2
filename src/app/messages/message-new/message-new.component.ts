import { Component, OnInit } from '@angular/core';
import { MessageSocketService } from '../message-socket.service';


@Component({
  selector: 'ct-message-new',
  templateUrl: './message-new.component.html',
  styleUrls: ['./message-new.component.css']
})
export class MessageNewComponent implements OnInit {
  private isTyping: boolean = false;
  typingUsers = [];
  constructor(private messageSocketService: MessageSocketService) { }

  ngOnInit() {
    this.messageSocketService.typing()
      .subscribe(user => {
        this.typingUsers.push(user)
      })

    this.messageSocketService.notTyping()
      .subscribe(user => {
        let i = this.typingUsers.indexOf(user);
        this.typingUsers.splice(i, 1);
      })
  }

  sendMessage(message) {
    if (message.value.length > 0) {
      this.messageSocketService.sendMessage(message.value)
      message.value = "";
      
      //stop typing
      this.messageSocketService.stopTyping()
      this.isTyping = false;
    }
    return false;
  }


  onChange(event) {
    if (event.target.value.length > 0 && !this.isTyping) {
      this.messageSocketService.isTyping()
      this.isTyping = true;
    }
    else if (event.target.value.length === 0 && this.isTyping) {
      this.messageSocketService.stopTyping()
      this.isTyping = false;
    }
  }

}
