import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

import { ITeam } from '../../interface';

import { TeamService } from '../team.service';
import { ProjectService } from '../../projects/project.service';

declare var $: any;


@Component({
  selector: 'app-team-create',
  templateUrl: './team-create.component.html',
  styleUrls: ['./team-create.component.css']
})
export class TeamCreateComponent implements OnInit {

  private new_team: ITeam;

  private email_pattern: string;

  private jq_summernote: boolean;
  private jq_datatable: boolean;

  private input_disable: boolean;
  private steps: number;
  private steps_prev: number;

  constructor(
    private _teamService: TeamService,
    private _projectService: ProjectService
  ) { }

  ngOnInit() {
    this.new_team = {
      tid: 112233,
      t_name: "Website Team",
      t_email: "nihao@gg.com",
      t_magictoken: 110020,
      t_status: 35,
      t_created: new Date(),
      t_modified: new Date(),
      t_views: 3000,
      t_about: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.."
    };

    this.new_team.t_areas = [
      { label: 'Photonics', value: true },
      { label: 'Semiconductor', value: true },
      { label: 'Electromagnetics', value: true },
      { label: 'Energy', value: true },
      { label: 'Analog', value: true },
      { label: 'Digital', value: true },
      { label: 'Control', value: true },
      { label: 'Communication', value: true },
      { label: 'Signal Processing', value: true },
      { label: 'Computer Hardware', value: true },
      { label: 'Computer Software', value: true },
      { label: 'Computer Network', value: true },
    ];

    this.email_pattern = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";

    this.jq_summernote = true;
    this.jq_datatable = false;

    this.input_disable = true;
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
      $('.summernote').summernote('code', this.new_team.t_about);
      this.jq_summernote = false;
    }
    if (this.jq_datatable) {
      $('#new_teammates').dataTable();
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
    this.steps != 1 && this.steps_prev == 1 ? this.new_team.t_about = $('.summernote').summernote('code') : null;
    this.jq_summernote = false;
  }


}
