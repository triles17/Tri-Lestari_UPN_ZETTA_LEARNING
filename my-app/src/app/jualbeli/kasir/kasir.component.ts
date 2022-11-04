import { Component, OnInit } from '@angular/core';
export interface item {id: number, name: string, price: number};
export interface selecteditem {id: number, name: string, price: number,amount: number};

@Component({
  selector: 'app-kasir',
  templateUrl: './kasir.component.html',
  styleUrls: ['./kasir.component.scss']
})
export class KasirComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  public items: item[] = [
    {id: 1, name: 'Cardigan', price: 45000},
    {id: 2, name: 'Blezer', price: 60000},
    {id: 3, name: 'Hoodie', price: 300000},
    {id: 4, name: 'Blouse', price: 325000},
    {id: 5, name: 'Dress', price: 760000},
    {id: 6, name: 'Kulot', price: 560000},
    {id: 7, name: 'Rok', price: 990000},
    {id: 8, name: 'kemeja', price: 199000},
    {id: 9, name: 'Tunik', price: 90000},
    {id: 9, name: 'gamis', price: 299000},
  ]

  public selectedItems: selecteditem[]=[];

  addItem(item:item){
    const duplicate = this.selectedItems.findIndex(({id}) => id === item.id);
    if(duplicate >= 0){this.selectedItems[duplicate].amount += 1}
    else{this.selectedItems.push({...item, amount: 1})}
  }
}