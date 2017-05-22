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
  showMsg: boolean = false;
  constructor(private messageSocketService: MessageSocketService) { }

  ngOnInit() {
    this.messageSocketService.typing()
      .subscribe(user => {
        this.typingUsers.push(user)
        console.log(this.typingUsers)
      })

    this.messageSocketService.notTyping()
      .subscribe(user => {
        let i = this.typingUsers.indexOf(user);
        this.typingUsers.splice(i, 1);
        console.log(this.typingUsers)
      })

      this.typingUsers.length > 0 ? this.showMsg = true : this.showMsg = false
  }

  sendMessage(message) {
    if (message.value.length > 0) {
      this.messageSocketService.sendMessage(message.value)
      message.value = "";
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
