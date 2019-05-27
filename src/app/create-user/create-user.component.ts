import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  userData = {
    name: null,
    identityCard: null,
    email: null,
    password: null,
    homeAddress: null,
  }

  constructor(private _location: Location, private httpService: HttpService, private router: Router) { }

  ngOnInit() {
  }

  goBackLastPage() {
    this._location.back();
  }

  createUser() {
    this.httpService.post('user', this.userData).subscribe(response => {
      console.log("==================================");
      console.log(response);
      this.router.navigateByUrl('/dashboard');
    }, error => console.log(error));
  }
}
