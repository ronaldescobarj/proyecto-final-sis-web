import { Component, OnInit } from '@angular/core';
import { SpotyService } from '../spoty.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-album-view',
  templateUrl: './album-view.component.html',
  styleUrls: ['./album-view.component.css']
})
export class AlbumViewComponent implements OnInit {

  albumSongs:any;
  albumImage:string = "";
  albumId:string = "";

  constructor(private spotyService:SpotyService, private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe( params => {
      this.albumId = params.albumId;
      this.albumImage= params.albumImage;
    })

    this.spotyService.getAlbumSong(this.albumId)
      .subscribe(songs=>{ 
        this.albumSongs = songs;
      });  
  }

  ngOnInit() {
  }

}
