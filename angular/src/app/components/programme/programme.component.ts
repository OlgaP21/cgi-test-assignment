import { Component, OnInit } from '@angular/core';
import { Film } from '../../models/film.model';
import { FilmService } from '../../services/film.service';

@Component({
  selector: 'app-programme',
  templateUrl: './programme.component.html',
  styleUrl: './programme.component.css'
})
export class ProgrammeComponent implements OnInit {

  films: Film[] = [];
  watchedFilms: Film[] = [];

  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
      this.retrieveFilms();
  }

  retrieveFilms(): void {
    this.filmService.getAll().subscribe({
      next: (data) => {
        this.films = data;
        // console.log(data);
      },
      error: (e) => console.error(e)
    });
    this.filmService.getWatched().subscribe({
      next: (data) => {
        this.watchedFilms = data;
        // console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  filterByDate(date: string) {
    return this.films.filter(film => film.date == date);
  }

  recommendFilms() {
    console.log(this.watchedFilms);
    if (this.watchedFilms.length == 0) return;
    const watchedGenres = new Set<string>();
    for (let film of this.watchedFilms) {
      film.genre.split(", ").forEach(function(genre) {
        watchedGenres.add(genre);
      });
    }
    var films: Film[] = [];
    for (let genre of watchedGenres) {
      this.films.filter(film => film.genre.includes(genre)).forEach(function(film) {
        films.push(film);
      });
    }
    this.films = films;
  }
}
