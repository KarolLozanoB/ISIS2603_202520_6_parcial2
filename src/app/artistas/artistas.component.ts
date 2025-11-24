import { Component, OnInit } from '@angular/core';
import { ArtistasService } from './artistas.service';
import { Artistas } from './Artistas';

@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.component.html',
  styleUrls: ['./artistas.component.css']
})
export class ArtistasComponent implements OnInit {

  artistas: Array<Artistas>=[]

  constructor(private artistasService: ArtistasService) { }

  ngOnInit() {
      this.artistasService.getArtistas().subscribe(data => {
      this.artistas = data;
      });
  }

}
