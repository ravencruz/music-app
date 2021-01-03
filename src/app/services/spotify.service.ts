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

  getNewRelease() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBOodN16xyq6GMmiEZlhl7WwNdIc_MWa6MXyAmeP1dxkeQMEoOrq3RZ22rhM82bKWMdUjdNQB_FMe2DWME'
    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
            .pipe( map( (data: any) => {
              return data['albums'].items
            } ) )
    
  }

  getArtista(termino: string) {
     
    console.log('searching artiasta', termino)
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBOodN16xyq6GMmiEZlhl7WwNdIc_MWa6MXyAmeP1dxkeQMEoOrq3RZ22rhM82bKWMdUjdNQB_FMe2DWME'
    })

    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist`, { headers })
          .pipe( map( (data: any) => {
            return data.artists.items
          } ) )
  }
}
