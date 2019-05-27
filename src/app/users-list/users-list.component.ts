import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  usersList = {}

  constructor(private router:Router, private httpService:HttpService) {

  }
  ngOnInit() {
    this.httpService.get("user").subscribe((response) => {
      console.log(response)
      this.usersList = response;
    })
  }

  viewUser(id: any) {
    console.log(id);
    this.router.navigateByUrl("/user/" + id);
  }

}
