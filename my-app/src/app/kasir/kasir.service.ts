export interface Game {title:string, id:string, harga:number}  
export interface selectedGame {title:string, id:string, harga:number, jumlah:number}  
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn :'root'
})

export class kasirService{
    private games : BehaviorSubject<Game[]> = new BehaviorSubject<Game[]> ([
        {
            id:'1',
            title: 'Cardigan',
            harga:45000
          },
          {
            id:'2',
            title: 'Blezer',
            harga:60000
          },
          {
            id:'3',
            title: 'Hoodie',
            harga: 300000
          },
          {
            id:'4',
            title: 'Blouse',
            harga: 325000
          },
          {
            id:'5',
            title: 'Dress',
            harga:760000
          },
          {
            id:'6',
            title: 'Kulot',
            harga: 560000
          },
          {
            id:'7',
            title: 'Rok',
            harga: 990000
          },
          {
            id:'8',
            title: 'kemeja',
            harga: 199000
          },
          {
            id:'9',
            title: 'Tunik',
            harga: 90000
          },
          {
            id:'10',
            title: 'gamis',
            harga: 299000
          },
          {
            id:'11',
            title: 'Hijab',
            harga: 29900
          },
          {
            id:'12',
            title: 'Jeans',
            harga: 699000
          },

    ])

    private selectedGames : BehaviorSubject<selectedGame[]> = new BehaviorSubject<selectedGame[]>([]);

    public games$ = this.games.asObservable();
    public selectedGames$ = this.selectedGames.asObservable();

    addGame(game :Game){
        const duplicated =this.selectedGames.value.findIndex(({id})=>id===game.id)
        let jumlah : 0;
        if(duplicated>=0){
            this.selectedGames.value[duplicated].jumlah+=1
        }
        else{
            this.selectedGames.value.push({...game, jumlah: 1})
        }
      }
    
}