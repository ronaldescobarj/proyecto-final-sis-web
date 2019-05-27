import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-concerts-list',
  templateUrl: './concerts-list.component.html',
  styleUrls: ['./concerts-list.component.css']
})
export class ConcertsListComponent implements OnInit {

  concertsList: any = []

  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.httpService.get("concert").subscribe((response) => {
      console.log(response)
      this.concertsList = response;
    })
  }

  viewConcert(id: any) {
    console.log(id);
    this.router.navigateByUrl("/concert/" + id);
  }


}
