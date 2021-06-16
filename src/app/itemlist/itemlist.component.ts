import { Component, OnInit } from '@angular/core';
import products from 'products.json';
// interface itemList { 
//   index: any,
//   isSale: boolean,
//   isExclusive: boolean,
//   price:any,
//   productImage:any,
//   productName:any,
//   size:[]

// } 
@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css']
})
 
export class ItemlistComponent implements OnInit {

  constructor() { }
 
  itemLists = products; 
  filteredString:any;
  ngOnInit(): void {
   
    //this.filterItem(event);
    console.log(this.filteredString)
    
  }

  filterItem(event){
    console.log(event.target.value);
    this.filteredString = event.target.value;
    console.log(this.filteredString)

  }

}
