import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpErrorResponse } from '@angular/common/http/src/response';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IUser, ITeam, IProject } from '../../interface';

import { UserService } from '../../users/user.service';
import { TeamService } from '../../teams/team.service';
import { ProjectService } from '../project.service';

@Injectable()
export class ProjectSearchService {

  private data: any[];

  private users: IUser[];
  private teams: ITeam[];
  private projects: IProject[];

  // this is urls
  // private api_users = './testdata/users/users.json';
  // private api_teams = './testdata/teams/teams.json';
  // private api_projects = './testdata/projets/projets.json';


  constructor(
    private _http: HttpClient,
    private _userService: UserService,
    private _teamService: TeamService,
    private _projectService: ProjectService
  ) { }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }

  getData() {
    this._userService.getUsers()
      .subscribe(_users => {
        for (let i = 0; i < _users.length; i++) {
          _users[i].u_created = new Date();
          _users[i].u_modified = new Date();
          _users[i].u_modified_str = _users[i].u_modified.toISOString().substring(0, 10);

          _users[i].u_tag ? _users[i].u_tags = _users[i].u_tag.split(" ") : null;
          //_users[i].u_team.t_tag ? _users[i].u_team.t_tags = _users[i].u_team.t_tag.split(" ") : null;

          _users[i].s_name = _users[i].u_name;
          _users[i].s_str = _users[i].uid + " " + _users[i].u_utorid + " " + _users[i].u_name + " " + _users[i].u_email + " " + _users[i].u_tag;
        }
        this.users = _users;

        this._teamService.getTeams()
          .subscribe(_teams => {
            for (let i = 0; i < _teams.length; i++) {
              _teams[i].t_created = new Date();
              _teams[i].t_modified = new Date();
              _teams[i].t_modified_str = _teams[i].t_modified.toISOString().substring(0, 10);

              _teams[i].t_tag ? _teams[i].t_tags = _teams[i].t_tag.split(" ") : null;

              _teams[i].s_name = _teams[i].t_name;
              _teams[i].s_str = _teams[i].tid + " " + _teams[i].oid + " " + _teams[i].t_owner + " " + _teams[i].t_email + " " + _teams[i].t_tag;
            }
            this.teams = _teams;

            this._projectService.getProjects()
              .subscribe(_projects => {
                for (let i = 0; i < _projects.length; i++) {
                  _projects[i].p_created = new Date();
                  _projects[i].p_modified = new Date();
                  _projects[i].p_modified_str = _projects[i].p_modified.toISOString().substring(0, 10);

                  _projects[i].p_tag ? _projects[i].p_tags = _projects[i].p_tag.split(" ") : null;

                  _projects[i].s_name = _projects[i].p_name;
                  _projects[i].s_str = _projects[i].pid + " " + _projects[i].oid + " " + _projects[i].p_owner + " " + _projects[i].p_email + " " + _projects[i].p_tag;

                }
                this.projects = _projects;

                this.data = [];
                this.data = this.data.concat(this.users, this.teams, this.projects);

                return this.data;
              });
          });
      });
  }

}
