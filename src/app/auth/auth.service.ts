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


    login(credentials): Observable<any> {
        const headers: Headers = new Headers({ 'Content-type': 'application/json' });
        var body = JSON.stringify(credentials);

        return this.http.post('http://eleksfrontendcamp-mockapitron.rhcloud.com/login',
        body, { headers: headers })
            .map((res: Response) => res.json())
            .catch((err: any) => Observable.throw(err))
    }


    register(credentials): Observable<any> {
        const headers: Headers = new Headers({ 'Content-type': 'application/json' });
        var body = JSON.stringify(credentials);
        
        return this.http.post('http://eleksfrontendcamp-mockapitron.rhcloud.com/signup',
        body,
        { headers: headers } )
    }


    logout(): void {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }

}