import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-merch',
  templateUrl: './view-merch.component.html',
  styleUrls: ['./view-merch.component.css']
})
export class ViewMerchComponent implements OnInit {

  merchId: any;
  merch: any = {
    name: null,
    price: null,
    availableUnits: null,
    imageUrl: null,
    description: null
  }

  constructor(private httpService: HttpService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.merchId = this.route.snapshot.paramMap.get("id");
    this.httpService.get("merchandise/" + this.merchId).subscribe(response => {
      this.merch = response;
    })
  }

  goBack() {
    this.router.navigateByUrl("/merch");
  }

}
