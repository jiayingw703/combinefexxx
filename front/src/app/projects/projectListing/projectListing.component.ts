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
          _projects[i].created = new Date();
          _projects[i].modified = new Date();
          _projects[i].modified_str = _projects[i].modified.toISOString().substring(0, 10);

          _projects[i].tag ? _projects[i].tags = _projects[i].tag.split(" ") : null;
        }

        this.projects = _projects;
      });
  }
}


