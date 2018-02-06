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
          _users[i].created = new Date();
          _users[i].modified = new Date();
          _users[i].modified_str = _users[i].modified.toISOString().substring(0, 10);

          _users[i].tag ? _users[i].tags = _users[i].tag.split(" ") : null;
          //_users[i].team.tag ? _users[i].team.tags = _users[i].team.tag.split(" ") : null;
        }

        this.users = _users;
      });
  }

}
