import { Component, OnInit } from '@angular/core';
import { MoviesDataService } from './../../data/movies-data.service';

@Component({
  selector: 'app-content-movie',
  templateUrl: './content-movie.component.html',
  styleUrls: ['./content-movie.component.css'],
})
export class ContentMovieComponent implements OnInit {
  movieList: any[] = [];
  constructor(private dataService: MoviesDataService) {}

  ngOnInit(): void {
    this.movieList = this.dataService.data;
  }
}
