import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  userData = {
    name: null,
    identityCard: null, 
    eMail: null,
    password: null,
    homeAddress: null,
    profilePicture: null
  }

  constructor(private _location: Location)  { }
  
  goBackLastPage() {
    this._location.back();
  }
  createUser() {
    console.log(this.userData);
  }
  ngOnInit() {
  }

}
