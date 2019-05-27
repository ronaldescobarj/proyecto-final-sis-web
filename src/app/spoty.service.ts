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
      'Authorization' : 'Bearer BQCTfHmlRNv2VZx8I6M3I96rkSzkwTrdkx4CRuDdHMlISLFY3Acw7G7PFJMlZ-QD6kN3lrAE4MI6OWm9kZE'
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
