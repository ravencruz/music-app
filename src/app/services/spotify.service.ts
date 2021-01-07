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
      'Authorization': 'Bearer BQDoY017bNO2AbjIBHX7gR_w8rm0HWtg4uLcXqrARwNFELivrkjaA9WqOAdCpse6d-jJbBv1YBv_SVAltlA'
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
