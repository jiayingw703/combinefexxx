import { Component, OnInit } from '@angular/core';

import { UserService } from '../../users/user.service';
import { TeamService } from '../../teams/team.service';
import { ProjectService } from '../project.service';
import { SearchService } from '../../search/search.service';
import { ProjectSearchService } from './projectSearch.service';


import { IUser, ITeam, IProject, IOption } from '../../interface';

import { forEach } from '@angular/router/src/utils/collection';

declare var $: any;

@Component({
  selector: 'app-projectSearch',
  templateUrl: './projectSearch.component.html',
  styleUrls: ['./projectSearch.component.css']
})
export class ProjectSearchComponent implements OnInit {

  private projects: IProject[];

  private data;
  private data_to_render: IProject[];
  private filtered: IProject[];

  private s_search: string;

  private s_date_start: Date;
  private s_date_end: Date;

  private s_tsize: number;
  private s_psize: number;

  private s_available: boolean;
  private s_complete: boolean;

  private s_areas: IOption[];
  constructor(
    private _searchService: SearchService,
    private _userService: UserService,
    private _teamService: TeamService,
    private _projectService: ProjectService,
    private _projectSearchService: ProjectSearchService

  ) { }

  ngOnInit() {

    // this.data = this._searchService.getData();
            this._projectService.getProjects()
              .subscribe(_projects => {
                for (let i = 0; i < _projects.length; i++) {
                  _projects[i].p_created = new Date();
                  _projects[i].p_modified = new Date();
                  _projects[i].p_modified_str = _projects[i].p_modified.toISOString().substring(0, 10);

                  _projects[i].p_tag ? _projects[i].p_tags = _projects[i].p_tag.split(" ") : null;

                  _projects[i].s_name = _projects[i].p_name;
                  _projects[i].s_str = _projects[i].pid + " " + _projects[i].oid + " " + _projects[i].p_owner + " " + _projects[i].p_email + " " + _projects[i].p_tag;

                }
                this.projects = _projects;

                this.data = [];
                this.data = this.data.concat(this.projects);

                this.data_to_render = this.data;
              });
    this.clear_filter();
  }

  private s_datepicker: boolean = false;
  ngAfterViewChecked() {
    if (!this.s_datepicker) {
      $('.input-daterange').datepicker({ format: 'yyyy-mm-dd' });
      // $('#date_start').datepicker('setDate', new Date());
      // $('#date_end').datepicker('setDate', new Date());
      this.s_datepicker = true;
    }

    $("#teamsize").TouchSpin({
      min: 2,
      max: 4,
      step: 1,
      verticalbuttons: true
    });

    $("#projectsize").TouchSpin({
      min: 1,
      max: 10,
      step: 1,
      verticalbuttons: true
    });
  }

  str_filter() {
    if (!$('#search_str').val().trim()) {
      console.log(typeof $('#search_str').val());
      this.data_to_render = this.data;
      return;
    }


    console.log("str_filter:", typeof this.s_search, this.s_search.length, this.s_search);

    this.filtered = [];
    this.s_search = this.s_search.trim();
    var keys = this.s_search.split(" ");
    console.log("keys:", typeof keys, keys.length, keys);
    var str: string;
    this.data.forEach(data => {
      for (let i = 0; i < keys.length; i++) {
        if (data.s_str.indexOf(keys[i]) !== -1) {
          console.log("Matched", data.s_str, keys[i]);
          this.filtered.push(data);
        }
      }
    });

    //this.filtered.sort();
    this.data_to_render = this.filtered;
    //this.untouched_filter() ? null : this.date_check();
  }

  date_check(date: Date): boolean {
    this.s_date_start = $('#date_start').datepicker("getDate");
    this.s_date_end = $('#date_end').datepicker("getDate");
    if (this.s_date_start == null && this.s_date_end == null) return true;
    return (date >= this.s_date_start && date <= this.s_date_end);
  }

  size_check(size: number, data_src: string): boolean {
    var result: boolean = false;
    var input_size: number;
    if (data_src == "team") {
      $('#teamsize').val() ? input_size = $('#teamsize').val() : input_size = null;
    }
    if (data_src == "project") {
      $('#projectsize').val() ? input_size = $('#teamsize').val() : input_size = null;
    }
    input_size == size || input_size == null ? result = true : result = false;
    return result;
  }

  area_check(item_areas): boolean {
    var areas_all: boolean = true;
    for (let i = 0; i < this.s_areas.length && areas_all; i++) {
      if (this.s_areas[i].value)
        areas_all = false;
    }
    if (areas_all) return areas_all;
    if (item_areas == undefined) return false;

    var result: boolean = false;
    this.s_areas.forEach(area => {
      for (let i = 0; i < item_areas.length && !result; i++) {
        if ((item_areas[i].label == area.label) && (item_areas[i].value == area.value)) {
          result = true;
        }
      }
    })
    return result;
  }

  status_check(item_status): boolean {
    if (!this.s_available && !this.s_complete)
      return true;
    var result_a: boolean = false;
    var result_c: boolean = false;
    this.s_available ? result_a = (item_status < 100) : null;
    this.s_complete ? result_c = (item_status == 100) : null;
    return result_a || result_c;
  }

  untouched_filter(): boolean {
    var clean: boolean = true;
    if (this.s_available || this.s_complete) {
      clean = false;
      return clean;
    }

    for (let i = 0; i < this.s_areas.length && clean; i++) {
      if (this.s_areas[i].value)
        clean = false;
    }

    return clean;

  }

  clear_filter() {
    this.s_areas = [
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

    this.s_available = false;
    this.s_complete = false;

    this.s_search = "";

    this.s_tsize = null;
    this.s_psize = null;

    this.data_to_render = this.data;

  }

  setall_filter() {
    this.s_areas = [
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

    this.s_available = true;
    this.s_complete = true;

    this.data_to_render = this.data;

  }


}
