import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../store/state/app.state';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';
import { AlertManagementService } from './alert.service';
import { TranslateService } from '@ngx-translate/core';


@Injectable()
export class ScoreGuard implements CanActivate {

    public clickedUser: Observable<User>;
    public currentUser: User;

    constructor(
        private store: Store<AppState>,
        private router: Router,
        private translateService: TranslateService,
        private alertManagementService: AlertManagementService) {
        this.clickedUser = this.store.select('actualUser');
    }

    public canActivate() {

        this.clickedUser.subscribe(user => this.currentUser = user[1]);

        if (this.currentUser && this.currentUser !== undefined) {
            console.log(this.currentUser);
            if (this.currentUser.score < 30) {
                const error = this.translateService.instant('error-messages.points');
                this.alertManagementService.viewAlert(error);
                this.router.navigate(['']);
                return false;
            } else {
                return true;
            }
        } else {
            this.router.navigate(['']);
            return false;
        }
    }
}
