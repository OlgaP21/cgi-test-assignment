/**
 * https://www.bezkoder.com/angular-16-crud-example/
 */

import { Component, OnInit, } from '@angular/core';
import { FilmService } from '../../services/film.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from '../../models/film.model';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent implements OnInit {
  places: number[][] = [];
  currentFilm: Film = {
    title: '',
    genre: '',
    language: '',
    ageRating: '',
    date: '',
    time: '',
    watched: false
  };

  ngOnInit(): void {
    this.filmService.get(this.route.snapshot.params["id"]).subscribe(
      data => this.currentFilm = data
    );
  }

  ngAfterViewInit() {
    this.generatePlaces();
  }

  constructor(private filmService: FilmService, private route: ActivatedRoute, private router: Router) { }

  generatePlaces() {
    for (let i = 0; i < 10; i++) {
      this.places[i] = [];
      for (let j = 0; j < 10; j++) {
        this.places[i][j] = Math.random() >= 0.5 ? 1 : 0;
      }
    }
    this.recommend();
  }

  recommend() {
    for (let i = 4; i > 1; i--) {
      for (let j = 4; j > 1; j--) {
        if (this.places[i][j] == 1) {
          this.places[i][j] = 2;
          return;
        } else if (this.places[i][10-j-1] == 1) {
          this.places[i][j] = 2;
          return;
        } else if (this.places[10-i-1][10-j-1] == 1) {
          this.places[i][j] = 2;
          return;
        }
      }
    }
  }

  updateWatchHistory(): void {
    const data = {
      title: this.currentFilm.title,
      genre: this.currentFilm.genre,
      language: this.currentFilm.language,
      ageRating: this.currentFilm.ageRating,
      date: this.currentFilm.date,
      time: this.currentFilm.time,
      watched: true
    };
    this.filmService.update(this.currentFilm.id, data).subscribe(
      result => this.goToProgrammePage()
    );
  }

  goToProgrammePage() {
    this.router.navigate(['/programme']);
  }
}
