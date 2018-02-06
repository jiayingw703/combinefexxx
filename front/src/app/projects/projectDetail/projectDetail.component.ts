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
        _project.p_created = new Date();
        _project.p_modified = new Date();
        _project.p_modified_str = _project.p_modified.toISOString().substring(0, 10);

        _project.p_tag ? _project.p_tags = _project.p_tag.split(" ") : null;

        this.project2 = _project;
      });
  }

}
