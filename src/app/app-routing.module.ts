import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthUserGuard } from './auth-user.guard';
import { AlbumViewComponent } from './album-view/album-view.component';
import { AlbumsComponent } from './albums/albums.component';
import { CreateConcertComponent } from '../app/create-concert/create-concert.component';
import { ViewConcertComponent } from '../app/view-concert/view-concert.component';
import { CreateUserComponent } from '../app/create-user/create-user.component';
import { ViewUserComponent } from '../app/view-user/view-user.component';
import { ConcertsListComponent } from './concerts-list/concerts-list.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'album-view/:albumId/:albumImage',component: AlbumViewComponent},
  { path: 'albums',component: AlbumsComponent}
  { path: 'new/concert', component:  CreateConcertComponent},
  { path: 'concerts', component:  ConcertsListComponent},
  { path: 'concert', component:  ViewConcertComponent},
  { path: 'new/user', component:  CreateUserComponent},
  { path: 'users', component:  UsersListComponent},
  { path: 'user', component:  ViewUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
