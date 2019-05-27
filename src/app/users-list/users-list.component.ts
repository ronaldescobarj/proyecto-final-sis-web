import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  usersList = null;

  constructor(private router: Router, private httpService: HttpService) {
  }

  ngOnInit() {
    this.httpService.get('user').subscribe((response) => {
      this.usersList = response;
    });
  }

  viewUser(id: any) {
    this.router.navigateByUrl('/user/' + id);
  }

  updateUser(id: any) {
    this.router.navigateByUrl('/user/update/' + id);
  }

  deleteUser(id: any) {
    if (confirm('Esta seguro que desea eliminar al usuario')) {
      this.httpService.delete('user', id).subscribe(response => {
        console.log(response);
        window.location.reload();
      });
    }
  }

}
