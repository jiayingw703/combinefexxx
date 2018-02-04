import { Component, OnInit } from '@angular/core';

import { IUser, IProject, ITeam } from '../../interface';

import { UserService } from '../../users/user.service';
import { TeamService } from '../../teams/team.service';
import { ProjectService } from '../../projects/project.service';



@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  private user: IUser;

  constructor(
    private _userService: UserService,
    private _teamService: TeamService,
    private _projectService: ProjectService
  ) { }

  ngOnInit() {
    this._userService.getUser()
      .subscribe(_user => {
        _user.u_created = new Date();
        _user.u_modified = new Date();
        _user.u_modified_str = _user.u_modified.toISOString().substring(0, 10);

        _user.u_tag ? _user.u_tags = _user.u_tag.split(" ") : null;

        // _user.u_team ? null : _user.u_team = {};
        // _user.u_team.t_tag ? null : _user.u_team.t_tag = "WOCAO";
        // _user.u_team.t_tags ? _user.u_team.t_tags = _user.u_team.t_tag.split(" ") : _user.u_team.t_tags = [];

        this._teamService.getTeam()
          .subscribe(_team => {
            _user.u_team = _team;
            _user.u_team.t_tags ? _user.u_team.t_tags = _user.u_team.t_tag.split(" ") : _user.u_team.t_tags = [];

            this._projectService.getProject()
              .subscribe(_project => {
                _user.u_project = _project;
                this.user = _user;
              })
          })

      });


  }

}
