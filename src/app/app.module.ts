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


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    AlbumsComponent,
    AlbumViewComponent,
    DomseguroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [
    AuthUserGuard,
    SpotyService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
