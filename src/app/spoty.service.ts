import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class SpotyService {

  constructor(private http:HttpClient) {
  }

  getQuery(query:string){
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQDIUDg6UUh9V_2Caxv06LxstkAUZqnnyF9RHra2d2orepH7wJT_LTct1oooyA1736NB24ABlq7dHB0wsnc'
    });
    return this.http.get(url,{headers})
  }

  getAlbumsOfOneArtist(artistId:string){
    return this.getQuery(`artists/${artistId}/albums`)
      .pipe(map( (albums:any) => {
        return albums.items;
      }))

  }

  getAlbumSong(albumId:string){
    return this.getQuery(`albums/${albumId}/tracks`)
    .pipe(map( (songs:any) => {return songs.items}))
  }

}
