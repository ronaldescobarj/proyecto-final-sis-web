import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = "";
  password: string = "";

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }
  
  login() {
    let userData = { email: this.email, password: this.password };
    this.loginService.login(userData);
  }

  loginWithFacebook() {
    this.loginService.loginWithFacebook();
  }

}
