import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private baseUrl = 'http://localhost:8080/api/v1/cinema/';
  private addMovieUrl = this.baseUrl + 'post-movie'; // URL for adding a movie
  private getMoviesUrl = 'http://localhost:8080/authenticated-user/get-all-movies'; // URL for getting all movies
  private deleteMovieUrl = this.baseUrl + 'delete-movie/'; // URL for deleting a movie
  private updateMovieUrl = this.baseUrl + 'update/'; // URL for updating a movie

  constructor(private http: HttpClient) {}

  getMovies() {
    return this.http.get<any[]>(this.getMoviesUrl);
  }

  addMovie(movieData: any) {
    return this.http.post(this.addMovieUrl, movieData);
  }

  deleteMovie(movieId: number) {
    return this.http.delete(this.deleteMovieUrl + movieId);
  }

  updateMovie(movieId: number, updatedMovieData: any) {
    return this.http.put(this.updateMovieUrl + movieId, updatedMovieData);
  }
}
