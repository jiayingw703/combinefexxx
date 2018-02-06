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
        _user.created = new Date();
        _user.modified = new Date();
        _user.modified_str = _user.modified.toISOString().substring(0, 10);

        _user.tag ? _user.tags = _user.tag.split(" ") : null;

        // _user.team ? null : _user.team = {};
        // _user.team.tag ? null : _user.team.tag = "WOCAO";
        // _user.team.tags ? _user.team.tags = _user.team.tag.split(" ") : _user.team.tags = [];

        this._teamService.getTeam()
          .subscribe(_team => {
            _user.team = _team;
            _user.team.tags = _user.team.tag.split(" ");

            this._projectService.getProject()
              .subscribe(_project => {
                _user.project = _project;
                this.user = _user;
              })
          })

      });


  }

}
