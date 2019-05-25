import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Router } from '@angular/router';

declare var FB: any;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpService: HttpService, private router: Router) {
    (window as any).fbAsyncInit = function () {
      FB.init({
        appId: '394907644436568',
        cookie: true,
        xfbml: true,
        version: 'v3.3'
      });
      FB.AppEvents.logPageView();
    };

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  login(credentials: any) {
    return this.httpService.post("login", credentials).subscribe(response => {
      this.success(credentials);
    })
  }

  private success(credentials: any) {
    localStorage.setItem("credentials", credentials);
    this.router.navigateByUrl("/home");
  }

  logout() {
    localStorage.removeItem("credentials");
  }

  loginWithFacebook() {
    console.log("submit login to facebook");
    // FB.login();
    FB.login((response) => {
      console.log('submitLogin', response);
      if (response.authResponse) {
        //login success
        //login success code here
        //redirect to home page
        this.success(response.authResponse);
      }
      else {
        console.log('User login failed');
      }
    });
  }
}
