import {Component, inject} from '@angular/core';
import {HighlightDirective} from '../highlight.directive';
import {MovieItemComponent} from '../movie-item/movie-item.component';
import {Movie} from '../model/movie.model';
import {MoviesService} from '../services/movies.service';
import {FavoritesService} from '../services/favorites.service';
import {Observable} from 'rxjs';
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HighlightDirective,
    MovieItemComponent,
    AsyncPipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  movieService = inject(MoviesService);
  protected movies$: Observable<Movie[]> = this.movieService.getMovies();
  protected favoritesService = inject(FavoritesService);

  filter(title: string, year: string){
    this.movies$ = this.movieService.filterMovieList(title, year)
  }
}
