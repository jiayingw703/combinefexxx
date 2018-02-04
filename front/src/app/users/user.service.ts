import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpErrorResponse } from '@angular/common/http/src/response';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IUser } from '../interface';

@Injectable()
export class UserService {

  private url = './assets/testdata/users/';

  constructor(private _http: HttpClient) { }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }

  getUser(): Observable<IUser> {
    return this._http.get<IUser>(this.url + "user.json")
      .do(data => console.log("user.service.ts - getUser: ", JSON.stringify(data)))
      .catch(this.handleError);
  }

  getUsers(): Observable<IUser[]> {
    return this._http.get<IUser[]>(this.url + "users.json")
      .do(data => console.log("user.service.ts - getUsers: ", JSON.stringify(data)))
      .catch(this.handleError);
  }

}
