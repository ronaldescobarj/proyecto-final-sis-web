import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';

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
    details: "detalles del conciertasdasdsadadadasdasdo",
    concertPicture: "https://cde.publimetro.e3.pe/ima/0/0/1/5/3/153889.jpg"
  }
  concertId: any;

  constructor(private _location: Location, private route: ActivatedRoute, private httpService: HttpService)  { }

  goBackLastPage() {
    this._location.back();
  }
  deleteConcert() {
    this.httpService.delete("concert/", this.concertId).subscribe((response) => {
      console.log(response);
    })  
  }
  ngOnInit() {
    this.concertId = this.route.snapshot.paramMap.get("id");
    this.httpService.get("concert/" + this.concertId).subscribe((response: any) => {
      console.log(response);
      this.concertData = response;
    })
  }
}
