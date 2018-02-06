import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

import { IUser } from '../../interface';

import { UserService } from '../user.service';

declare var $: any;

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  private user: IUser;

  private email_pattern: string;

  constructor(
    private _userService: UserService,
  ) { }

  ngOnInit() {
    this._userService.getUser()
      .subscribe(_user => {
        _user.created = new Date();
        _user.modified = new Date();
        _user.modified_str = _user.modified.toISOString().substring(0, 10);

        _user.tag ? _user.tags = _user.tag.split(" ") : null;

        _user.team.tags = _user.team.tag.split(" ");

        this.user = _user;
      });
    
      this.user.areas = [
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

  }

  ngAfterViewChecked() {

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
    $('.summernote').summernote('code', this.user.about);

  }

}
