import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-concert',
  templateUrl: './view-concert.component.html',
  styleUrls: ['./view-concert.component.css']
})
export class ViewConcertComponent implements OnInit {

  concertData = {
    title: "Aniversario de Cochabamba 2019 Twenty One Pilots",
    location: "Feliz Capriles", 
    city: "Cochabamba, Bolivia",
    price: "20000",
    date: "21 de septiembre",
    entrySchedule: "21:00",
    terminationSchedule: "23:59",
    details: "detalles del concierto",
    concertPicture: "https://cde.publimetro.e3.pe/ima/0/0/1/5/3/153889.jpg"
  }

  constructor(private _location: Location)  { }

  goBackLastPage() {
    this._location.back();
  }
  deleteConcert() {
    
  }
  ngOnInit() {
  }

}
