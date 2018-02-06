import { Component, OnInit } from '@angular/core';

import { UserService } from '../../users/user.service';
import { TeamService } from '../../teams/team.service';
import { ProjectService } from '../../projects/project.service';

import { ITeam } from '../../interface';

@Component({
  selector: 'app-team-profile',
  templateUrl: './team-profile.component.html',
  styleUrls: ['./team-profile.component.css']
})
export class TeamProfileComponent implements OnInit {

  private team: ITeam;

  constructor(
    private _userService: UserService,
    private _teamService: TeamService,
    private _projectService: ProjectService
  ) { }

  ngOnInit() {
    this._teamService.getTeam()
      .subscribe(_team => {
        _team.created = new Date();
        _team.modified = new Date();
        _team.modified_str = _team.modified.toISOString().substring(0, 10);

        _team.tag ? _team.tags = _team.tag.split("") : null;

        this.team = _team;        
      })
  }

}
