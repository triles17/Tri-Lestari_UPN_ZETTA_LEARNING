import { DataServiceService } from './../../service/data-service.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

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