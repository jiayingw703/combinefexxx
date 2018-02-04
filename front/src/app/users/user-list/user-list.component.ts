import { Component, OnInit } from '@angular/core';
import { IUser } from '../../interface';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  private users: IUser[];

  constructor(
    private _userService: UserService
  ) { }

  ngOnInit() {
    this._userService.getUsers()
      .subscribe(_users => {

        for (let i = 0; i < _users.length; i++) {
          _users[i].u_created = new Date();
          _users[i].u_modified = new Date();
          _users[i].u_modified_str = _users[i].u_modified.toISOString().substring(0, 10);

          _users[i].u_tag ? _users[i].u_tags = _users[i].u_tag.split(" ") : null;
          //_users[i].u_team.t_tag ? _users[i].u_team.t_tags = _users[i].u_team.t_tag.split(" ") : null;
        }

        this.users = _users;
      });
  }

}
