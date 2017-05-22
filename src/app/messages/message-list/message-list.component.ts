import { Component, OnInit } from '@angular/core';
import { MessageSocketService } from '../message-socket.service';


@Component({
  selector: 'ct-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  logedUser: string;
  messages = [];
  user;
  join = false;
  constructor(private messageSocketService: MessageSocketService) { }

  ngOnInit() {
    this.messageSocketService.getAllMessages().subscribe(this.onSuccess.bind(this), this.onError);
    this.messageSocketService.getMessages().subscribe(message => {
      this.messages.push(message);
    })
    this.messageSocketService.joinUser()
      .subscribe(user => {
        this.user = user
        this.join = true;
        setTimeout(() => this.join = false, 12000)
      })

  }

  onSuccess(msg): void {
    this.messages = msg.slice(-5);
    this.logedUser = localStorage.getItem('user');
  }

  onError(err): void {
    console.log(err)
  }


}
