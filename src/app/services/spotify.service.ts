import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
      'Authorization': 'Bearer BQAwpMlEbn8TzqNnj_6EgSkqRfMEAncbD6xbrvkUh7wBnTZEjp7ybLw4W52xnVQ2p0A5RpB5JqPNZg72_HM'
    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
    
  }
}
