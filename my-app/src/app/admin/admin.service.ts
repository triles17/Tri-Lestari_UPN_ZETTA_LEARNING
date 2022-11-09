import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs"
export interface admin {id :string}
export interface admin {id : string , nama : string , posisi : string , kehadiran : string ,action : string}

@Injectable({
    providedIn :'root'

})


export class adminService{
    private Admin : BehaviorSubject<admin[]> =  new BehaviorSubject<admin[]>([
        {
            id : '1' , 
            nama : 'Angga Zakie', 
            posisi :'Manager', 
            kehadiran :  'hadir' ,
            action : 'Detail'
        },
        {
            id : '2' , 
            nama : 'Mazdatul Qorinah', 
            posisi :'Divi Pemasaran', 
            kehadiran :  'Tidak Hadir' ,
            action : 'Detail'
        },
        {
            id : '3' , 
            nama : 'Refal Hady', 
            posisi :'Admin Sosial Media', 
            kehadiran :  'Hadir' ,
            action : 'Detail'
        },
        {
            id : '4' , 
            nama : 'Defi Saleha', 
            posisi :'Content Creator', 
            kehadiran :  'Hadir' ,
            action : 'Detail'
        },
        {
            id : '5' , 
            nama : 'Dita Rahma Amalia', 
            posisi :'Admin1', 
            kehadiran :  'Tidak Hadir' ,
            action : 'Detail'
        },
        {
            id : '6' , 
            nama : 'Yasinda', 
            posisi :'Admin2', 
            kehadiran :  'Tidak Hadir' ,
            action : 'Detail'
        },
        {
            id : '7' , 
            nama : 'Tri sulastri', 
            posisi :'Admin3', 
            kehadiran :  'Tidak Hadir' ,
            action : 'Detail'
        },
        {
            id : '8' , 
            nama : 'Chen', 
            posisi :'Operasional', 
            kehadiran :  'Hadir' ,
            action : 'Detail'
        },
        {
            id : '9' , 
            nama : 'Jungkook', 
            posisi :'Packing', 
            kehadiran :  'Hadir' ,
            action : 'Detail'
        },
        {
            id : '10' , 
            nama : 'Henny', 
            posisi :'Packing', 
            kehadiran :  'Hadir' ,
            action : 'Detail'
        }
      ]);


constructor(){

      }
      
public admin$ = this.Admin.asObservable();

getadminById(id:string) : any{
    const adminarray = this.Admin.getValue();
    console.log(adminarray)
    const admin = adminarray.find(admin => admin.id ===id)
    return admin || null;
        
      
      }

    
    
  }