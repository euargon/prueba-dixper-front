import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { UsersService } from './shared/services/users.service';
import { UsersSearchComponent } from './pages/users-search/users-search.component';
import { Mappers } from './shared/services/mappers.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { SummaryService } from './shared/services/summary.service';
import { StoreModule } from '@ngrx/store';
import { reducer, userReducer } from './shared/store/reducers/user.reducer';
import { ScoreGuard } from './shared/services/guard.service';
import { ModalComponent } from './shared/components/modal/modal.component';
import { AlertManagementService } from './shared/services/alert.service';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [
    AppComponent,
    UsersSearchComponent,
    UserDetailComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      users: reducer,
      actualUser: userReducer
    })
  ],
  providers: [UsersService, Mappers, SummaryService, ScoreGuard, AlertManagementService],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
