import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users.service';
import { User } from 'src/app/shared/models/user';
import { Mappers } from 'src/app/shared/services/mappers.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/store/state/app.state';
import * as UserActions from 'src/app/shared/store/actions/user.actions';
import { AlertManagementService } from 'src/app/shared/services/alert.service';
import { TranslateService } from '@ngx-translate/core';
import { URL_GIF } from 'src/app/shared/utils/constants';

@Component({
  selector: 'app-users-search',
  templateUrl: './users-search.component.html',
  styleUrls: ['./users-search.component.scss']
})
export class UsersSearchComponent implements OnInit {

  public userList: User[];
  public userName: string;
  public noUserURL: string;
  public userForm: FormGroup;

  constructor(
    private store: Store<AppState>,
    private formBuilder: FormBuilder,
    private translateService: TranslateService,
    private alertManagementService: AlertManagementService,
    private usersService: UsersService,
    private mapperService: Mappers) { }

  ngOnInit() {
    this.noUserURL = URL_GIF;
    this.configureForm();
  }

  public onSubmit() {
    if (this.userForm.invalid) {
      const error = this.translateService.instant('error-messages.search-limit');
      this.alertManagementService.viewAlert(error);
    } else {
      this.searchUsers(this.userName);
    }
  }

  public configureForm() {
    this.userForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  public addUsers(users: User[]) {
    this.store.dispatch(new UserActions.AddUsersAction(users));
  }

  public addCurrentUSer(user: User) {
    this.store.dispatch(new UserActions.AddCurrentUserAction(user));
  }

  public searchUsers(userName: string) {
    this.usersService.getUsersByName(userName).subscribe(
      (users: any) => {
        if (users.total_count !== 0) {
          this.userList = this.mapperService.mapUserList(users.items);
          this.userList = this.userList.splice(0, 10);
          this.addUsers(this.userList);
        } else {
          this.userList = undefined;
        }
      },
      () => {
        const error = this.translateService.instant('error-messages.search');
        this.alertManagementService.viewAlert(error);
      });
  }

  public onUserClicked(login: string) {
    let selectedUser: User;
    selectedUser = this.userList.filter(user => user.login === login)[0];
    this.addCurrentUSer(selectedUser);
  }

}
