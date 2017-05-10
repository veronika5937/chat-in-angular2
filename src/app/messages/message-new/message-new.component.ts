import { Component, OnInit } from '@angular/core';
import { MessageSocketService } from '../message-socket.service';


@Component({
  selector: 'ct-message-new',
  templateUrl: './message-new.component.html',
  styleUrls: ['./message-new.component.css']
})
export class MessageNewComponent implements OnInit {

  constructor(private messageSocketService: MessageSocketService) { }

  ngOnInit() {
  }
  
  sendMessage(message) {
    if (message.value.length > 0) {
      this.messageSocketService.sendMessage(message.value)
      message.value = "";
    }
    return false;
  }

}
