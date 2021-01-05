import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent  {

  loadingArtista: boolean;
  artista: any = {};

  constructor(private router: ActivatedRoute,
              private spotService: SpotifyService) {

    this.loadingArtista = true

    this.router.params.subscribe( params => {
      console.log('Cargando', params['id'])


      this.getArtista(params['id']);
      console.log('luego de llmar a get artista')
      // this.loadingArtista = false;
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

}
