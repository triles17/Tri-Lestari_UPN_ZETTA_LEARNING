import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserManagerService } from '../user-manager.service';
export interface List {id : string ,name : string ,email: string, age : number , gender : string , position :string, marital : string , addresgrup : addres[]} 
export interface addres {addres :string , zip : string ,  city : string , country : string}
import Swal from 'sweetalert2' 


interface pos {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  private listid : string|null =null
  public list : List|null = null

  constructor(private route: ActivatedRoute , private service : UserManagerService) { 
    this.listid = this.route.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    if(typeof this.listid === 'string'){
      this.list = this.service.getListById(this.listid)
    }
    
    
  }

}
