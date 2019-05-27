import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  userData = {
    name: "Daniel",
    identityCard: "7711450", 
    eMail: "dany.orop@gmail.com",
    password: "12345678",
    homeAddress: "C/ Tahuantinsuyo #830",
    profilePicture: "https://img.peru21.pe/files/article_content_ec_fotos/uploads/2017/08/17/5995f28029027.jpeg"
  }
  constructor(private _location: Location)  { }
  
  goBackLastPage() {
    this._location.back();
  }
  deleteUser() {
    
  }
  ngOnInit() {
  }

}
