import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpErrorResponse } from '@angular/common/http/src/response';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IProject } from '../interface';

@Injectable()
export class ProjectService {

  private url = './assets/testdata/projects/';
  
  constructor(private _http: HttpClient) { }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }

  getProject(): Observable<IProject> {

    return this._http.get<IProject>(this.url + "project.json")
      .do(data => console.log("project.service.ts - getProject: ", JSON.stringify(data)))
      .catch(this.handleError);



    // for search component
    // project.s_name = project.name;
    // project.s_str = project.pid + " " + project.oid + " " + project.name + " " + project.owner + " " + project.email + " " + project.tag


  }


  getProjects(): Observable<IProject[]> {
    return this._http.get<IProject>(this.url + "projects.json")
      .do(data => console.log("project.service.ts - getProject: ", JSON.stringify(data)))
      .catch(this.handleError);
  }

}
