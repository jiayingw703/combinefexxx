import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpErrorResponse } from '@angular/common/http/src/response';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { ITeam } from '../interface';


@Injectable()
export class TeamService {

  private url = './assets/testdata/teams/';

  constructor(private _http: HttpClient) { }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }

  getTeam(): Observable<ITeam> {
    return this._http.get<ITeam>(this.url + "team.json")
      .do(data => console.log("team.service.ts - getTeam: ", JSON.stringify(data)))
      .catch(this.handleError);
  }

  getTeams(): Observable<ITeam[]> {
    return this._http.get<ITeam[]>(this.url + "teams.json")
      .do(data => console.log("team.service.ts - getTeams: ", JSON.stringify(data)))
      .catch(this.handleError);
  }

}
