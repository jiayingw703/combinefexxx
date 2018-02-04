import { Component, OnInit } from '@angular/core';

import { UserService } from '../../users/user.service';
import { TeamService } from '../../teams/team.service';
import { ProjectService } from '../../projects/project.service';

import { ITeam } from '../../interface';

@Component({
  selector: 'app-projectDetail',
  templateUrl: './projectDetail.component.html',
  styleUrls: ['./projectDetail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  private team: ITeam;

  constructor(
    private _userService: UserService,
    private _teamService: TeamService,
    private _projectService: ProjectService
  ) { }

  ngOnInit() {
    this._teamService.getTeam()
      .subscribe(_team => {
        _team.t_created = new Date();
        _team.t_modified = new Date();
        _team.t_modified_str = _team.t_modified.toISOString().substring(0, 10);

        _team.t_tag ? _team.t_tags = _team.t_tag.split("") : null;

        this.team = _team;
      })
  }

}
