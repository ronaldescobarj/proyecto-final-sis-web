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
import { MerchListComponent } from './merch-list/merch-list.component';
import { AddMerchComponent } from './add-merch/add-merch.component';
import { UpdateConcertComponent } from './update-concert/update-concert.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { EditMerchComponent } from './edit-merch/edit-merch.component';
import { ViewMerchComponent } from './view-merch/view-merch.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'album-view/:albumId/:albumImage', component: AlbumViewComponent },
  { path: 'albums', component: AlbumsComponent },
  { path: 'concert/new', component: CreateConcertComponent },
  { path: 'concert/update/:id', component: UpdateConcertComponent },
  { path: 'concerts', component: ConcertsListComponent },
  { path: 'concert/:id', component: ViewConcertComponent },
  { path: 'user/new', component: CreateUserComponent },
  { path: 'user/update/:id', component: UpdateUserComponent },
  { path: 'users', component: UsersListComponent },
  { path: 'user/:id', component: ViewUserComponent },
  { path: 'merch', component: MerchListComponent },
  { path: 'merch/new', component: AddMerchComponent },
  { path: 'merch/update/:id', component: EditMerchComponent },
  { path: 'merch/:id', component: ViewMerchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
