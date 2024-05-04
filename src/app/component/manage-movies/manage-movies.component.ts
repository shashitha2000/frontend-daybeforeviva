import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-manage-movies',
  templateUrl: './manage-movies.component.html',
  styleUrls: ['./manage-movies.component.css']
})
export class ManageMoviesComponent implements OnInit {
  movies: any[] = [];
  updatedMovieData: any = {}; // Define an object to hold updated movie data

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.fetchMovies();
  }

  fetchMovies() {
    this.movieService.getMovies().subscribe(
      (response) => {
        this.movies = response;
      },
      (error) => {
        console.error('Error fetching movies:', error);
      }
    );
  }

  deleteMovie(movieId: number) {
    this.movieService.deleteMovie(movieId).subscribe(() => {
      this.fetchMovies();
    }, (error) => {
      console.error('Error deleting movie:', error);
      this.fetchMovies(); // Fetch movies again to refresh the list
    });
  }
  
  
  
  updateMovie(movieId: number) {
    this.movieService.updateMovie(movieId, this.updatedMovieData).subscribe(
      () => {
        console.log('Movie updated successfully');
        this.fetchMovies(); // Refresh movies after update
      },
      (error) => {
        console.error('Error updating movie:', error);
      }
    );
  }
}
