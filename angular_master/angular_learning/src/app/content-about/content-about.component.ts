import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesDataService } from 'src/app/data/movies-data.service';


@Component({
  selector: 'app-content-about',
  templateUrl: './content-about.component.html',
  styleUrls: ['./content-about.component.css']
})
export class ContentAboutComponent implements OnInit {

  constructor(private moviesdata: MoviesDataService, private ar: ActivatedRoute) { }
  data: any;
  id: any;
  ngOnInit(): void {
    this.id = this.ar.snapshot.params['id']
    this.data = this.moviesdata.data.find((data) => data.id == this.id)
  }

}
