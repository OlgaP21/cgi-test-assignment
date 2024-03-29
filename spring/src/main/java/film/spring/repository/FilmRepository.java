package film.spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import film.spring.model.Film;
import java.util.List;

public interface FilmRepository extends JpaRepository<Film, Long> {
    List<Film> findByDate(String date);
    List<Film> findByWatched(boolean watched);
}
