/*
 * https://www.bezkoder.com/spring-boot-jpa-h2-example/
 */

package film.spring.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "film")
public class Film {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "title")
    private String title;

    @Column(name = "genre")
    private String genre;

    @Column(name = "language")
    private String language;

    @Column(name = "ageRating")
    private String ageRating;

    @Column(name = "date")
    private String date;

    @Column(name = "time")
    private String time;

    @Column(name = "watched")
    private boolean watched;

    public Film() {}

    public Film(String title, String genre, String language, String ageRating, String date, String time, boolean watched) {
        this.title = title;
        this.genre = genre;
        this.language = language;
        this.ageRating = ageRating;
        this.date = date;
        this.time = time;
        this.watched = watched;
    }

    public long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public String getAgeRating() {
        return ageRating;
    }

    public void setAgeRating(String ageRating) {
        this.ageRating = ageRating;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public boolean getWatched() {
        return watched;
    }

    public void setWatched(boolean watched) {
        this.watched = watched;
    }

    @Override
    public String toString() {
        return "Film [id=" + id + 
            ", title=" + title + 
            ", genre=" + genre + 
            ", language=" + language + 
            ", ageRating=" + ageRating + 
            ", date=" + date + 
            ", time=" + time + 
            ", watched=" + watched + "]";
    }
}
