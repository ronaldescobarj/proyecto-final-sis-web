import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  isLoggedIn() {
    return localStorage.getItem("credentials");
  }

  logout() {
    this.loginService.logout();
  }

  register() {
    this.router.navigateByUrl("/user/new");
  }

}
