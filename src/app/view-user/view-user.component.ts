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
  };
  userId: any;
  constructor(private _location: Location, private router: Router,
    private httpService: HttpService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.httpService.get('user/' + this.userId).subscribe((response: any) => {
      this.userData = response;
    });
  }

  goBackLastPage() {
    this._location.back();
  }

  deleteUser() {
    this.httpService.delete('user', this.userId).subscribe((response) => {
      this.router.navigateByUrl('/dashboard');
    });
  }

  update() {
    this.router.navigateByUrl('/user/update/' + this.userId);    
  }
}
