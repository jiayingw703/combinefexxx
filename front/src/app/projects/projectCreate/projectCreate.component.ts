import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

import {IProject, ITeam} from '../../interface';

import { TeamService } from '../../teams/team.service';
import { ProjectService } from '../../projects/project.service';

declare var $: any;


@Component({
  selector: 'app-projectCreate',
  templateUrl: './projectCreate.component.html',
  styleUrls: ['./projectCreate.component.css']
})
export class ProjectCreateComponent implements OnInit {

  private new_project: IProject;

  private email_pattern: string;

  private jq_summernote: boolean;
  private jq_datatable: boolean;

  private inpup_disable: boolean;
  private steps: number;
  private steps_prev: number;

  constructor(
    private _teamService: TeamService,
    private _projectService: ProjectService
  ) { }

  ngOnInit() {
    this.new_project = {
      pid: 112233,
      email: "nihao@gg.com",
      magictoken: 110020,
      created: new Date(),
      modified: new Date(),
      views: 0
    };

    this.new_project.areas = [
      { label: 'Photonics', value: false },
      { label: 'Semiconductor', value: false },
      { label: 'Electromagnetics', value: false },
      { label: 'Energy', value: false },
      { label: 'Analog', value: false },
      { label: 'Digital', value: false },
      { label: 'Control', value: false },
      { label: 'Communication', value: false },
      { label: 'Signal Processing', value: false },
      { label: 'Computer Hardware', value: false },
      { label: 'Computer Software', value: false },
      { label: 'Computer Network', value: false },
    ];

    this.new_project.size = [
      { label: '2', value: false },
      { label: '3', value: false },
      { label: '4', value: false },
    ];

    this.new_project.status = [
      { label: 'Open', value: true },
      { label: 'Closed', value: false },
    ];

    this.email_pattern = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";

    this.jq_summernote = true;
    this.jq_datatable = false;

    this.inpup_disable = true;
    this.steps = 1;
    this.steps_prev = 1;


  }

  ngAfterViewChecked() {
    if (this.jq_summernote) {
      $('.summernote').summernote({
        height: 200,
        minHeight: null,
        maxHeight: null,
        toolbar: [
          // [groupName, [list of button]]
          ['style', ['style']],
          ['style', ['bold', 'italic', 'underline', 'clear']],
          ['font', ['strikethrough', 'superscript', 'subscript']],
          ['color', ['color']],
          ['para', ['ul', 'ol', 'paragraph']],
          ['table', ['table']],
          ['height', ['height']],
          ['fullscreen', ['fullscreen']]
        ]
      });
      $('.summernote').summernote('code', this.new_project.about);
      this.jq_summernote = false;
    }
    if (this.jq_datatable) {
      $('#new_project').dataTable();
      this.jq_datatable = false;
    }

  }

  step_show(step) {
    this.steps_prev = this.steps;
    this.steps = step;
    this.steps == 1 ? this.jq_summernote = true : this.save_summernote();
    this.steps == 2 ? this.jq_datatable = true : this.jq_datatable = false;
  }

  step_prev() {
    this.steps_prev = this.steps;
    this.steps--;
    this.step_show(this.steps);
  }

  step_next() {
    this.steps_prev = this.steps;
    this.steps++;
    this.step_show(this.steps);
  }

  save_summernote() {
    this.steps != 1 && this.steps_prev == 1 ? this.new_project.about = $('.summernote').summernote('code') : null;
    this.jq_summernote = false;
  }


}
