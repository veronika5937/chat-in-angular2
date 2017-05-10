import { Component, OnInit } from '@angular/core';
import { MessageSocketService } from '../message-socket.service';


@Component({
  selector: 'ct-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  user: string;
  messages = [];
  constructor(private messageSocketService: MessageSocketService) { }

  ngOnInit() {
     this.messageSocketService.getAllMessages().subscribe(this.onSuccess.bind(this), this.onError); 
     this.messageSocketService.getMessages().subscribe(message => {
     this.messages.push(message);
    })
  }

  onSuccess(msg): void {
    this.messages = msg.slice(-5);
    this.user = localStorage.getItem('user');
  }

  onError(err): void {
    console.log(err)
  }
 
}
