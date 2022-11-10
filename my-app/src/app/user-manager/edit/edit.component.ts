import { Component, OnInit } from '@angular/core';
import {Form, FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserManagerService } from '../user-manager.service';
export interface List {id : string ,name : string ,email: string, age : number , gender : string , position :string, marital : string , addresgrup : addres[]} 
export interface addres {addres :string , zip : string ,  city : string , country : string}


interface pos {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  private listid : string|null =null
  public list : List|null = null
  public form : FormGroup 
  public temp : any = this.list?.addresgrup.length

  constructor(private fb : FormBuilder ,private router : Router, private Service : UserManagerService  ,private route : ActivatedRoute) { 

    this.listid = this.route.snapshot.paramMap.get('id')
    this.form = this.fb.group({
      id : [null ,[Validators.required]],
      name : [null ,[Validators.required]],
      age : [null ,[Validators.required,Validators.min(19)]],
      gender : [null ,[Validators.required]],
      email : [null ,[Validators.required , Validators.email]],
      position : [null ,[Validators.required]],
      marital : [null ,[Validators.required]],
      addresgrup : this.fb.array([this.adressformgrup()])
      
    })

   

    if(typeof this.listid === 'string'){
      this.list = this.Service.getListById(this.listid)
    }

    
    


  }
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  ngOnInit(): void {
  
  

    this.listid = this.route.snapshot.paramMap.get('id')
    this.form = this.fb.group({
      id : [this.list?.id ,[Validators.required]],
      name : [this.list?.name ,[Validators.required]],
      age : [this.list?.age ,[Validators.required,Validators.min(19)]],
      gender : [this.list?.gender ,[Validators.required]],
      email : [this.list?.email ,[Validators.required , Validators.email]],
      position : [this.list?.position ,[Validators.required]],
      marital : [this.list?.marital ,[Validators.required]],
      addresgrup : this.fb.array([this.adressformgrup()])
      
    })

    this.adddt(this.list?.addresgrup.length)
  }
  poss: pos[] = [
    {value: 'Manager', viewValue: 'Manager'},
    {value: 'Admin', viewValue: 'Admin'},
    {value: 'Employee', viewValue: 'Employee'},
  ];

  get addres() : FormArray{
    return this.form.get('addresgrup')as FormArray
  }
  
  adressformgrup() : FormGroup {
 
    return this.fb.group({
    
      addres : [this.list?.addresgrup[0].addres ,[Validators.required]],
      zip : [this.list?.addresgrup[0].zip  ,[Validators.required,Validators.minLength(6),Validators.maxLength(9)]],
      city : [this.list?.addresgrup[0].city  ,[Validators.required]],
      country : [this.list?.addresgrup[0].country  ,[Validators.required]],
    })
  }

  submit() : void {
    const payload = this.form.value;
    console.log(payload);
    this.Service.addUser(payload)
    this.router.navigate(['user-management','list'])
    
    
  }

  adddt(tot : any) {
    for (let index = 1; index < tot; index++) {
      (<FormArray>this.form.get('addresgrup')).push(new FormGroup({
        addres: new FormControl(this.list?.addresgrup[index].addres , [Validators.required]),
        zip: new FormControl(this.list?.addresgrup[index].zip  ,[Validators.required,Validators.minLength(6),Validators.maxLength(9)]),
        city: new FormControl(this.list?.addresgrup[index].city  ,[Validators.required]),
        country: new FormControl(this.list?.addresgrup[index].country  ,[Validators.required])
      }))
      console.log();
      
      
    }
  
  }

  add() {
    (<FormArray>this.form.get('addresgrup')).push(new FormGroup({
      addres: new FormControl(null , [Validators.required]),
      zip: new FormControl(null ,[Validators.required,Validators.minLength(6),Validators.maxLength(9)]),
      city: new FormControl(null ,[Validators.required]),
      country: new FormControl(null ,[Validators.required])
    }))

   
    
  }



}