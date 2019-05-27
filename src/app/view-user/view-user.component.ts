import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  userData = {
    name: null,
    identityCard: null,
    email: null,
    password: null,
    homeAddress: null,
    profilePicture: null
  }
  userId: any;
  constructor(private _location: Location, private router: Router, private httpService: HttpService, private route: ActivatedRoute) { }

  goBackLastPage() {
    this._location.back();
  }
  deleteUser() {
    this.httpService.delete("user", this.userId).subscribe((response) => {
      console.log(response);
    })
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
