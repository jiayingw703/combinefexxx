import { Component, OnInit } from '@angular/core';
import { ITeam } from '../../interface';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  private teams: ITeam[];

  constructor(
    private _teamService: TeamService
  ) { }

  ngOnInit() {
    this._teamService.getTeams()
      .subscribe(_teams => {
        for (let i = 0; i < _teams.length; i++) {
          _teams[i].created = new Date();
          _teams[i].modified = new Date();
          _teams[i].modified_str = _teams[i].modified.toISOString().substring(0, 10);

          _teams[i].tag ? _teams[i].tags = _teams[i].tag.split(" ") : null;
        }

        this.teams = _teams;
      });
  }

}
