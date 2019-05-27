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
  emailInvalid: boolean = false;
  passwordInvalid: boolean = false;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }
  
  login() {
    let userData = { email: this.email, password: this.password };
    this.loginService.login(userData, (response) => {
      if (response.message == "Usuario no existente") {
        this.emailInvalid = true;
        return false;
      }
      if (response.message == "Password incorrecto") {
        this.passwordInvalid = true;
        return false;        
      }
      else
        return true;
    });
  }

  loginWithFacebook() {
    this.loginService.loginWithFacebook();
  }

}
