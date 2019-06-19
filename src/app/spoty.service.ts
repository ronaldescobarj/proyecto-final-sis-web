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
      'Authorization' : 'Bearer BQBF6rxrad0dCr9WBL32vlBCC76JOkCz5iieLVl_BCx_6XKWMbuBGggE0CvkG1ViSXlOVbZeObiDAXlKu7o'
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
