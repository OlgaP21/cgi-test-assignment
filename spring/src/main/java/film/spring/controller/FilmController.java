package film.spring.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import film.spring.model.Film;
import film.spring.repository.FilmRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class FilmController {
    @Autowired
    FilmRepository filmRepository;

    @GetMapping("/films")
    public ResponseEntity<List<Film>> getAllFilms(@RequestParam(required = false) String date) {
        try {
            List<Film> films;
            if (date == null) {
                films = filmRepository.findAll();
            } else {
                films = filmRepository.findByDate(date);
            }
            if (films.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            } else {
                return new ResponseEntity<>(films, HttpStatus.OK);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/films/{id}")
    public ResponseEntity<Film> getFilmById(@PathVariable("id") long id) {
        Optional<Film> filmData = filmRepository.findById(id);
        if (filmData.isPresent()) {
            return new ResponseEntity<>(filmData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/films/watched")
    public ResponseEntity<List<Film>> findByWatched() {
        try {
            List<Film> films = filmRepository.findByWatched(true);
            if (films.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            } else {
                return new ResponseEntity<>(films, HttpStatus.OK);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/films/{id}")
    public ResponseEntity<Film> updateFilm(@PathVariable("id") long id, @RequestBody Film film) {
        Optional<Film> filmData = filmRepository.findById(id);
        if (filmData.isPresent()) {
            Film _film = filmData.get();
            /*
            _film.setTitle(film.getTitle());
            _film.setGenre(film.getGenre());
            _film.setLanguage(film.getLanguage());
            _film.setAgeRating(film.getAgeRating());
            _film.setDate(film.getDate());
            _film.setTime(film.getTime());
            */
            _film.setWatched(film.getWatched());
            return new ResponseEntity<>(filmRepository.save(_film), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
