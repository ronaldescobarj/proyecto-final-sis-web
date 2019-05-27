import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthUserGuard } from './auth-user.guard';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumViewComponent } from './album-view/album-view.component';
import { SpotyService} from './spoty.service';
import { DomseguroPipe } from './pipes/domseguro.pipe';

import { CreateConcertComponent } from './create-concert/create-concert.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ViewConcertComponent } from './view-concert/view-concert.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { ConcertsListComponent } from './concerts-list/concerts-list.component';
import { UsersListComponent } from './users-list/users-list.component';
import { FormsModule } from '@angular/forms';
import { MerchListComponent } from './merch-list/merch-list.component';
import { AddMerchComponent } from './add-merch/add-merch.component';
import { EditMerchComponent } from './edit-merch/edit-merch.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    AlbumsComponent,
    AlbumViewComponent,
    DomseguroPipe,
    CreateConcertComponent,
    CreateUserComponent,
    ViewConcertComponent,
    ViewUserComponent,
    ConcertsListComponent,
    UsersListComponent,
    MerchListComponent,
    AddMerchComponent,
    EditMerchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [
    AuthUserGuard,
    SpotyService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
