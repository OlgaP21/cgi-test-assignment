import { Component, OnInit } from '@angular/core';
import { Film } from '../../models/film.model';
import { FilmService } from '../../services/film.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent implements OnInit {

  films?: Film[];

  constructor(private filmService: FilmService) {}

  ngOnInit(): void {
      this.retrieveFilms();
  }

  retrieveFilms(): void {
    this.filmService.getWatched().subscribe({
      next: (data) => {
        this.films = data;
        // console.log(data);
      },
      error: (e) => console.error(e)
    });
  }
}
