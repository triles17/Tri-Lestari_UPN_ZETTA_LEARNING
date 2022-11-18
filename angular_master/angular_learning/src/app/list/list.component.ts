import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

DataService
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private datas: DataService, private router: Router) {
    this.datas.getData().subscribe((data) => {
      this.data = data;
    })
  }
  data: any = []
  filterdata: any = ''
  ngOnInit(): void {
    this.datas.getData().subscribe((data) => {
      this.data = data;
      console.log(this.data)
    })
  }
  ngOnEdit(id: any) {
    this.router.navigate(['edit/' + id])
    //console.log(id)
  }

}