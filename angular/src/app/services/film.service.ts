/**
 * https://www.bezkoder.com/angular-16-crud-example/
 */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from '../models/film.model';

const baseUrl = 'http://localhost:8080/api/films';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Film[]> {
    return this.http.get<Film[]>(baseUrl);
  }

  get(id: any): Observable<Film> {
    return this.http.get<Film>(`${baseUrl}/${id}`);
  }

  getWatched(): Observable<Film[]> {
    return this.http.get<Film[]>(`${baseUrl}/watched`);
  }

  update(id: any, film: Film): Observable<Film> {
    return this.http.put<Film>(`${baseUrl}/${id}`, film);
  }
}
