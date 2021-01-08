import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators'

@Injectable(
  {
    providedIn: 'root'
  }
)
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify Service Listo')
  }

  getQuery( query: string) {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBOdGGHkvLVMjNwx2YEobhcvQZTLeNbnCIz3vnhpwW1si-cnl7A80yIXEm3AMUD98OJa8A-0D4gfUKQB2Y'
    })

    const url = `https://api.spotify.com/v1/${query}`

    return this.http.get(url, {headers})
  }

  getNewRelease() {

    return this.getQuery('browse/new-releases')
            .pipe( map( (data: any) => {
              return data['albums'].items
            } ) )
    
  }

  getArtistas(termino: string) {
     
    console.log('searching artiasta', termino)
    

    return this.getQuery(`search?q=${ termino }&type=artist`)
          .pipe( map( (data: any) => {
            return data.artists.items
          } ) )
  }

  getArtista(id: string) {
     
    console.log('searching artiasta', id)
    

    return this.getQuery(`artists/${ id }`)
          .pipe( map( (data: any) => {
            return data
          } ) )
  }

  getTopTracks(id: string) {
     
    console.log('topTracks', id)
    

    return this.getQuery(`artists/${ id }/top-tracks?market=ES`)
          .pipe( map( (data: any) => {
            return data.tracks
          } ) )
  }
}
