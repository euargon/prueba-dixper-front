import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/shared/services/users.service';
import { UserInfo } from 'src/app/shared/models/user-info';
import { Mappers } from 'src/app/shared/services/mappers.service';
import { Repository } from 'src/app/shared/models/repository';
import { RepoSummary } from 'src/app/shared/models/repo-summary';
import { SummaryService } from 'src/app/shared/services/summary.service';
import { AlertManagementService } from 'src/app/shared/services/alert.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  public login: string;
  public user: UserInfo;
  public userRepos: Repository[];
  public repoSummary: RepoSummary;

  constructor(
    private route: ActivatedRoute,
    private translateService: TranslateService,
    private alertManagementService: AlertManagementService,
    private userService: UsersService,
    private mapperService: Mappers,
    private summaryService: SummaryService) { }

  ngOnInit() {
    this.login = this.route.snapshot.paramMap.get('login');
    this.getUserDetails(this.login);
  }

  public getUserDetails(login: string) {

    this.userService.getUserDetail(login).subscribe(
      (user: any) => {
        this.user = this.mapperService.mapUserDetails(user);
      },
      () => {
        const error = this.translateService.instant('error-messages.details');
        this.alertManagementService.viewAlert(error);
      });

    this.userService.getUserRepositories(login).subscribe(
      (repos: any) => {
        this.userRepos = this.mapperService.mapUserRepos(repos);
        this.repoSummary = this.summaryService.getSummary(this.userRepos);
      },
      () => {
        const error = this.translateService.instant('error-messages.repos');
        this.alertManagementService.viewAlert(error);
    });
  }

  public setRepoType(privateRepo: boolean) {
    return privateRepo === true ? 'private' : 'public';
  }
}
