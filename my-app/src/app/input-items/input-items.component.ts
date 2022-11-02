import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-itemst',
  templateUrl: './input-items.component.html',
  styleUrls: ['./input-items.component.scss']
})
export class InputItemsComponent implements OnInit {
  @Input('taskElement') element: {type: string,name: string,content:string};

  constructor() { }

  ngOnInit(): void {
  }


}
