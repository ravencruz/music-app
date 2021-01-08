import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  error: boolean = false
  loading: boolean;
  mensajeError: string
  nuevasCanciones: any[] = []

  constructor(private spotify: SpotifyService) { 
    
    this.loading = true
    this.error = false
    this.mensajeError = ""

    this.spotify.getNewRelease()
    .subscribe( (data: any) => {
      console.log(data);
      this.nuevasCanciones = data
      this.loading = false

    }, (errorServicio)=>{
        console.log(errorServicio)
        this.mensajeError = errorServicio.error.error.message
        this.error = true
        this.loading = false
    } )

  }

  ngOnInit(): void {
  }

}
