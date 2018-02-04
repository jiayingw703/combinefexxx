import { Component, OnInit } from '@angular/core';

import { IProject } from '../../interface';
import { ProjectService } from '../project.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-projectListing',
  templateUrl: './projectListing.component.html',
  styleUrls: ['./projectListing.component.css']
})
export class ProjectListingComponent implements OnInit {

  private projects: IProject[];

  constructor(
    private _projectService: ProjectService
  ) { }

  ngOnInit() {
    this._projectService.getProjects()
      .subscribe(_projects => {

        for (let i = 0; i < _projects.length; i++) {
          _projects[i].p_created = new Date();
          _projects[i].p_modified = new Date();
          _projects[i].p_modified_str = _projects[i].p_modified.toISOString().substring(0, 10);

          _projects[i].p_tag ? _projects[i].p_tags = _projects[i].p_tag.split(" ") : null;
        }

        this.projects = _projects;
      });
  }
}


