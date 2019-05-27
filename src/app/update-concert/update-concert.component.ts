import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-update-concert',
  templateUrl: './update-concert.component.html',
  styleUrls: ['./update-concert.component.css']
})
export class UpdateConcertComponent implements OnInit {

  concertData = {
    title: null,
    location: null,
    city: null,
    price: null,
    date: null,
    entrySchedule: null,
    terminationSchedule: null,
    details: null,
    concertPicture: null
  }
  concertId: any;

  constructor(private _location: Location, private route:ActivatedRoute, private httpService:HttpService) { }

  goBackLastPage() {
    this._location.back();
  }
  updateConcert() {
    console.log(this.concertData);
  }
  ngOnInit() {
    this.concertId = this.route.snapshot.paramMap.get("id");
    this.httpService.get("concert/" + this.concertId).subscribe((response: any) => {
      console.log(response);
      this.concertData = response;
    })
  }
}
