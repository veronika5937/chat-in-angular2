import { Injectable } from '@angular/core';
import *as io from 'socket.io-client';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class MessageSocketService {
    socket;
    constructor(private http: Http) { }

    connect() {
        this.socket = io.connect('http://eleksfrontendcamp-mockapitron.rhcloud.com:8000');
        this.socket.on('connect', () => {
            this.socket.emit('authenticate', { token: localStorage['token'] });
        })
        this.socket.on('join', msg => console.log(msg));
    }

    getAllMessages() {
        return this.http.get('http://eleksfrontendcamp-mockapitron.rhcloud.com/messages')
            .map((res: Response) => res.json())
    }

    sendMessage(msg): void {
        this.socket.emit('message', msg);
    }

    getMessages() {
        if (!this.socket) {
            this.connect();
        }
        let observable = new Observable(observer =>
            this.socket.on('message', msg => observer.next(msg))
        );
        return observable
    }
        

}

