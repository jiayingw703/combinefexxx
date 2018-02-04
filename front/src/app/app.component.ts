import { Component } from '@angular/core';
import { UserService } from './users/user.service';
import { ProjectService } from './projects/project.service';
import { TeamService } from './teams/team.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    UserService,
    TeamService,
    ProjectService
  ]
})
export class AppComponent {
  title = 'Capweb';
}
