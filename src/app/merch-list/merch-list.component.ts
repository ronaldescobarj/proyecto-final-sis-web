import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-merch-list',
  templateUrl: './merch-list.component.html',
  styleUrls: ['./merch-list.component.css']
})
export class MerchListComponent implements OnInit {

  merchList: any = [];

  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.httpService.get("merchandise").subscribe(response => {
      this.merchList = response;
    });
  }

  add() {
    this.router.navigateByUrl("/merch/new");
  }

  viewDetails(id: any) {
    this.router.navigateByUrl("/merch/" + id);
  }

  edit(id: any) {
    this.router.navigateByUrl("/merch/update/" + id);
  }

  delete(id: any) {
    this.httpService.delete("merchandise", id).subscribe(response => {
      window.location.reload();
    })
  }

}
