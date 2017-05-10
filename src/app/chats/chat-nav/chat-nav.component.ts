import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ChatService } from "../chat.service";


@Component({
  selector: 'ct-chat-nav',
  templateUrl: './chat-nav.component.html',
  styleUrls: ['./chat-nav.component.css']
})
export class ChatNavComponent implements OnInit {

  private isOpen: boolean = false;
  searchValue: string = '';


  @Output() isSidebarOpen = new EventEmitter<boolean>();

  constructor(private chatService: ChatService) { }

  ngOnInit() {
  }

  onSidebarOpen(){
    this.isOpen = !this.isOpen;
    this.isSidebarOpen.emit(this.isOpen);
  }

  onBlur(): void {
    this.searchValue = '';
    this.chatService.setSeachValue('');
  }

   private onSearchValueChange(value: string): void {
    this.chatService.setSeachValue(value);
  }

}
