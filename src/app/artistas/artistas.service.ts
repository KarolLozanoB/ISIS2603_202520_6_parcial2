import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Artistas } from './Artistas';

@Injectable({
  providedIn: 'root'
})
export class ArtistasService {

private apiUrl: string = 'http://localhost:8080/' + 'artistas';

constructor(private http: HttpClient) {}

  getArtistas(): Observable<Artistas[]> {
    return this.http.get<Artistas[]>(this.apiUrl);
  }

}
