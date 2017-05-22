import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Component({
  selector: 'ct-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
online: Observable<boolean>;

constructor() {
  this.online = Observable.merge(
    Observable.of(navigator.onLine),
    Observable.fromEvent(window, 'online').map(() => true),
    Observable.fromEvent(window, 'offline').map(() => false)
  )
  console.log(this.online)
}
  
}
