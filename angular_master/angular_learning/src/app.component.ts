import { Component, OnInit } from '@angular/core';
import { DataServiceService } from './service/data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular_learning';
  dataSource: any;
  keyfilter: any = '';
  key: any;
  data: any;
  displayedColumns: string[] = ['Name', 'Usertype', 'Email', 'Status'];
  constructor(private ds: DataServiceService) { }
  ngOnInit(): void {
    this.key = this.keyfilter;
    this.ds.getData().subscribe((data) => {
      this.dataSource = data;

    })
  }
}