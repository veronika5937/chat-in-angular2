import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ct-chat-detail',
  templateUrl: './chat-detail.component.html',
  styleUrls: ['./chat-detail.component.css']
})


export class ChatDetailComponent implements OnInit {
  @Input() leaveUser;
  constructor() { }

  ngOnInit() {
  }

}
