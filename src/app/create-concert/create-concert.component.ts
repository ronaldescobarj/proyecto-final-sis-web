import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common"; 

@Component({
  selector: 'app-create-concert',
  templateUrl: './create-concert.component.html',
  styleUrls: ['./create-concert.component.css']
})
export class CreateConcertComponent implements OnInit {

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


  constructor(private _location: Location)  { }
  
  goBackLastPage() {
    this._location.back();
  }
  createConcert() {
    console.log(this.concertData);
  }
  ngOnInit() {
  }

}
