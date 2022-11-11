import { Component, OnInit ,AfterContentChecked} from '@angular/core';
import {Form, FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { EditComponent } from '../edit/edit.component';
import { UserManagerService } from '../user-manager.service';
export interface List {id : string ,name : string ,email: string, age : number , gender : string , position :string, marital : string , addresgrup : addres[]} 
export interface addres {addres :string , zip : string ,  city : string , country : string}
import Swal from 'sweetalert2'



interface pos {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  private listid : string|null =null
  public list : List|null = null
  public form : FormGroup 
  
  

  
  

  constructor(private fb : FormBuilder ,private router : Router, private Service : UserManagerService   ) { 
    
    this.form = this.fb.group({
      id : [null ,[Validators.required ,Validators.pattern("^[0-9]*$")]],
      name : [null ,[Validators.required ,Validators.pattern("^[a-z,A-Z ]*$")]],
      age : [null ,[Validators.required,Validators.min(10) , Validators.pattern("^[0-9]*$")]],
      gender : [null ,[Validators.required]],
      email : [null ,[Validators.required , Validators.email]],
      position : [null ,[Validators.required]],
      marital : [null ,[Validators.required]],
      addresgrup : this.fb.array([this.adressformgrup()])
      
    })

  }

  
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  cek: any;
  cekemail : any;
  ngOnInit(): void {

 
    this.form.statusChanges.subscribe((value1 ) => {
      this.cek = value1    
    })

    this.form.get('email')?.statusChanges.subscribe((value) => {
      this.cekemail = value
      console.log(this.cekemail);
      
    })

  


    this.form.get('name')?.valueChanges.subscribe(this.name.bind(this));
    this.form.get('id')?.valueChanges.subscribe(this.id.bind(this));
    

  
   

    
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
      addres : [null ,[Validators.required ,]],
      zip : [null ,[Validators.required,Validators.minLength(6),Validators.maxLength(9) ,Validators.pattern("^[0-9]*$")]],
      city : [null ,[Validators.required]],
      country : [null ,[Validators.required]],
    })
  }

  Cekemail() {
    console.log(this.cekemail);
    
    if(this.cekemail == "INVALID"){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please Enter a Invalid Email'
      })
    }

    else{
      
    }
  }
  submit() : void {

    if (this.cek == "INVALID") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Data tidak Valid'
      })
    } else {
      Swal.fire(
        'Good job!',
        'success'
      )
      setTimeout(() => {
        const payload = this.form.value;
        console.log(payload);
        this.Service.addUser(payload)
        this.router.navigate(['..','list'])
      }, 1000)
    }

   
    
  }
  
  add() {
    (<FormArray>this.form.get('addresgrup')).push(new FormGroup({
      addres: new FormControl(null , [Validators.required]),
      zip: new FormControl(null ,[Validators.required,Validators.minLength(6),Validators.maxLength(9), Validators.pattern("^[0-9]*$")] ),
      city: new FormControl(null ,[Validators.required]),
      country: new FormControl(null ,[Validators.required])
    }))

   
    
  }
  name(text : any){


    let newValue = text.replace(/[^a-z|\s]/ig, '');
    this.form.get('name')?.patchValue(newValue, { emitEvent: false });
  }

  id(id : any){
    let newValue = id.replace(/[^0-9|\s]/ig, '');
    this.form.get('id')?.patchValue(newValue, { emitEvent: false });
  }

}