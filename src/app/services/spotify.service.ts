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
      'Authorization': 'Bearer BQBOodN16xyq6GMmiEZlhl7WwNdIc_MWa6MXyAmeP1dxkeQMEoOrq3RZ22rhM82bKWMdUjdNQB_FMe2DWME'
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
