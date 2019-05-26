import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthUserGuard } from './auth-user.guard';
import { CreateConcertComponent } from '../app/create-concert/create-concert.component';
import { ViewConcertComponent } from '../app/view-concert/view-concert.component';
import { CreateUserComponent } from '../app/create-user/create-user.component';
import { ViewUserComponent } from '../app/view-user/view-user.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'new/concert', component:  CreateConcertComponent},
  { path: 'new/user', component:  CreateUserComponent},
  { path: 'concert', component:  ViewConcertComponent},
  { path: 'user', component:  ViewUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
