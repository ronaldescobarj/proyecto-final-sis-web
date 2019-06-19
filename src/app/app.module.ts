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
import { FooterComponent } from './footer/footer.component';
import { MerchListComponent } from './merch-list/merch-list.component';
import { AddMerchComponent } from './add-merch/add-merch.component';
import { EditMerchComponent } from './edit-merch/edit-merch.component';
import { UpdateConcertComponent } from './update-concert/update-concert.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ViewMerchComponent } from './view-merch/view-merch.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';

import { ReactiveFormsModule } from '@angular/forms';


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
    FooterComponent,
    MerchListComponent,
    AddMerchComponent,
    EditMerchComponent,
    UpdateConcertComponent,
    UpdateUserComponent,
    ViewMerchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthUserGuard,
    SpotyService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
