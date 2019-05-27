import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-merch',
  templateUrl: './add-merch.component.html',
  styleUrls: ['./add-merch.component.css']
})
export class AddMerchComponent implements OnInit {

  merch: any = {
    name: null,
    price: null,
    availableUnits: null,
    imageUrl: null,
    description: null
  }

  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit() {
  }

  addMerch() {
    console.log(this.merch);
    this.httpService.post("merchandise", this.merch).subscribe(response => {
      this.goBack();
    })
  }

  goBack() {
    this.router.navigateByUrl("/merch");
  }
}
