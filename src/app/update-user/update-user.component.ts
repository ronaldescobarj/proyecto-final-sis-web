import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HttpSentEvent } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
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
  };
  userId: any;
  constructor(private _location: Location, private httpService: HttpService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.httpService.get('user/' + this.userId).subscribe((response: any) => {
      this.userData = response;
    })
  }

  goBackLastPage() {
    this._location.back();
  }

  updateUser() {
    this.httpService.put('user', this.userData).subscribe(response => {
      console.log(response);
      this.router.navigateByUrl('users');
    });
  }

}

