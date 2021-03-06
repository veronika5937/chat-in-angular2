import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { MessageSocketService } from '../../messages'

@Injectable()
export class UserService {
    constructor(private http: Http,
    private messageSocketService: MessageSocketService) { }

    setUser(data): void {
        this.messageSocketService.connect();
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', data.user.username);
    }

    removeUser(): void {
        this.messageSocketService.disconnect();
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }

    getUser(): string {
        return localStorage.getItem('token');
    }

    isLoggedIn(): boolean {
        return this.getUser() !== null;
    }

   getAllUsers(): Observable<any> {
        return this.http.get('https://chat93.herokuapp.com/users')
            .map((res: Response) => res.json())
            .catch((err: any) => Observable.throw(err))
    }
}