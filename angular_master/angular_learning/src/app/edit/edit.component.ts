// import {  } from './../service/data.service';
import { DataService } from 'src/app/service/data.service';
import { Component, OnInit } from '@angular/core';
import { identifierName } from '@angular/compiler';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  data: any;
  id: any;
  fileForm: any
  non: any = true;
  constructor(private dataservice: DataService, private routeActive: ActivatedRoute, private route: Router) {

  }
  dataedit: FormGroup = new FormGroup({
    id: new FormControl(null),
    title: new FormControl(null, Validators.required),
    content: new FormControl(null, Validators.required)
  })
  ngOnInit(): void {
    this.id = this.routeActive.snapshot.params['id'];
    // this.dataservice.getData().subscribe((data) => {
    //   this.data = data.find(x => x.id == this.id)
    // })
    this.dataservice.getData().subscribe((data) => {
      this.data = data.find(x => x.id == this.id);
      console.log(this.data)
      this.dataedit.controls['title'].setValue(this.data.title);
      this.dataedit.controls['content'].setValue(this.data.content);
      this.dataedit.controls['id'].setValue(this.data.id);
    })
  }

  ngOnEdit() {
    this.dataservice.editData(this.dataedit.value).subscribe(data => console.log(data))
    this.route.navigate([''])
    console.log(this.dataedit.value)
  }

}