import { Component, OnInit } from '@angular/core';
import { SpotyService } from '../spoty.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  artistId:string = "3YQKmKGau1PzlVlkL1iodx"
  artistAlbums:any;

  constructor(private spotyService:SpotyService, private router:Router) { 
    this.spotyService.getAlbumsOfOneArtist(this.artistId)
      .subscribe(albums=>{
        this.artistAlbums = albums; 
        console.log(this.artistAlbums);
      });
  }

  ngOnInit() {
  }

  goToAlbumView(albumId:string,albumImage:string){

    this.router.navigate(['/album-view',albumId,albumImage]);

  }

}
