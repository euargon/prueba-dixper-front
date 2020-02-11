import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { UsersSearchComponent } from './pages/users-search/users-search.component';
import { ScoreGuard } from './shared/services/guard.service';


const routes: Routes = [
  { path: '', component: UsersSearchComponent },
  { path: 'user-detail/:login', component: UserDetailComponent, canActivate: [ScoreGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
