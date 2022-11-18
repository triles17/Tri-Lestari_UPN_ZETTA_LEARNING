import { DataService } from './../service/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  data: any;
  id: any;
  fileForm: any
  non: any = true;
  constructor(private dataservice: DataService, private routeActive: ActivatedRoute, private route: Router) {

  }
  dataadd: FormGroup = new FormGroup({
    id: new FormControl(null),
    title: new FormControl(null, Validators.required),
    content: new FormControl(null, Validators.required)
  })
  ngOnInit(): void {
    this.dataservice.getData().subscribe(data => {
      this.dataadd.controls['id'].setValue(data.length + 1)
    })
  }

  ngOnAdd() {
    this.dataservice.pushData(this.dataadd.value).subscribe(data => console.log(data))
    this.route.navigate([''])
  }

}