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
      'Authorization': 'Bearer BQCFyMfyBLdCUfzD0myVGT532kDJXPnpKUMBdHQrEDebnTpHSQ_lM5jfVvoxq0s1e7RTk6ca7pqJkQHqPr8'
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
}
