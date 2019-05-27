import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { HttpSentEvent } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  userData = {
    name: null,
    identityCard: null,
    eMail: null,
    password: null,
    homeAddress: null,
    profilePicture: null
  }
  userId: any;
  constructor(private _location: Location, private httpService:HttpService, private route:ActivatedRoute) { }

  goBackLastPage() {
    this._location.back();
  }
  updateUser() {
    console.log(this.userData);
  }
  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get("id");
    console.log(this.userId);
    this.httpService.get("user/" + this.userId).subscribe((response: any) => {
      console.log(response);
      this.userData = response;
    })
  }
}

