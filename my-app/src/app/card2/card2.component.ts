import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.scss']
})
export class card2Component implements OnInit {
  user = ['Victor','Jeff','Robert'];
  currentStatus1 = 'offline';
  currentStatus2 = 'offline';
  currentStatus3 = 'offline';
  status = true;

  changeStatus1(){
    this.currentStatus1 = "online";
  }
  changeStatus2(){
    this.currentStatus2 = "online";
  }
  changeStatus3(){
    this.currentStatus3 = "online";
  }

  constructor() { 
  }


  ngOnInit(): void {
  }

}
