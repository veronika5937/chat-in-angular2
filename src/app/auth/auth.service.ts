import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { UserService } from './user';

@Injectable()
export class AuthService {
    constructor(private http: Http,
        private userService: UserService) { }

        post(url, credentials){
             const headers: Headers = new Headers({ 'Content-type': 'application/json' });
             var body = JSON.stringify(credentials);
             return this.http.post(url, body, { headers: headers })
        }

    login(credentials): Observable<any> {
        return this.post('https://chat93.herokuapp.com/login', credentials) 
            .map((res: Response) => res.json())
    }


    register(credentials): Observable<any> {
        return this.post('https://chat93.herokuapp.com/signup', credentials)
    }


    logout(): void {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }

}