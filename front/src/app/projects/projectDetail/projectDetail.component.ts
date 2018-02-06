import { Component, OnInit } from '@angular/core';

import { UserService } from '../../users/user.service';
import { TeamService } from '../../teams/team.service';
import { ProjectService } from '../../projects/project.service';

import { IProject } from '../../interface';

@Component({
  selector: 'app-projectDetail',
  templateUrl: './projectDetail.component.html',
  styleUrls: ['./projectDetail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  private project2: IProject;


  constructor(
    private _userService: UserService,
    private _teamService: TeamService,
    private _projectService: ProjectService
  ) { }

  ngOnInit() {
    this._projectService.getProject()
      .subscribe(_project => {
        _project.created = new Date();
        _project.modified = new Date();
        _project.modified_str = _project.modified.toISOString().substring(0, 10);

        _project.tag ? _project.tags = _project.tag.split(" ") : null;

        this.project2 = _project;
      });
  }

}
