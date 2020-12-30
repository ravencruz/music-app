import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  paises: any[] = []

  constructor(private http: HttpClient) { 
    console.log('Home Construtor')
    this.http.get('https://restcountries.eu/rest/v2/lang/es')
    .subscribe( (resp: any) => {
      console.log(resp)
      this.paises = resp
    } )
  }

  ngOnInit(): void {
  }

}
