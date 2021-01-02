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
      'Authorization': 'Bearer BQCDE7eT8qRWE8nArMEtTD12QYEX7_rzSX_V-CuNC3Taak94k8sfv2MnNPIbd9zLX0bCftGsya8c2Mr6e00'
    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
    
  }

  getArtista(termino: string) {
    
    console.log('searching artiasta', termino)
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCDE7eT8qRWE8nArMEtTD12QYEX7_rzSX_V-CuNC3Taak94k8sfv2MnNPIbd9zLX0bCftGsya8c2Mr6e00'
    })

    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist`, { headers })
  }
}
