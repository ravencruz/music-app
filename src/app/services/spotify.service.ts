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
      'Authorization': 'Bearer BQCzWqdhgh3Og6Z5d4Ja4n-T1Y5W8Zhrdz15mIow0uKE2xN_kDQemhhSaVc29fgKGlCCHBgIXFmqxAJbndk'
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

  getArtista(termino: string) {
     
    console.log('searching artiasta', termino)
    

    return this.getQuery(`search?q=${ termino }&type=artist`)
          .pipe( map( (data: any) => {
            return data.artists.items
          } ) )
  }
}
