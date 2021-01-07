import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { VirtualTimeScheduler } from 'rxjs';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent  {

  artista: any = {};
  topTracks: any[] = []
  loadingArtista: boolean;

  constructor(private router: ActivatedRoute,
              private spotService: SpotifyService) {

    this.loadingArtista = true

    this.router.params.subscribe( params => {
      console.log('Cargando', params['id'])

      this.getArtista(params['id']);
      console.log('luego de llmar a get artista')

      this.getTopTracks(params['id']);
    } )
  }

  getArtista(id: string) {

    this.loadingArtista = true;
    this.spotService.getArtista(id)
    .subscribe( artista => {
      
      console.log(artista);
      this.artista = artista

      console.log('termine de cargar')
      this.loadingArtista = false;
    } )
  }

  getTopTracks(id: string) {
    this.spotService.getTopTracks(id)
    .subscribe( topTracks => {
      console.log(topTracks)
      this.topTracks = topTracks
    } )
  }

}
