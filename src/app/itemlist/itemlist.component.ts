import { Component, OnInit } from '@angular/core';
import products from 'products.json';

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css']
})
 
export class ItemlistComponent implements OnInit {

  constructor() { }
  itemLists = products; 
  filteredString:any;
  ngOnInit(): void {}
  filterItem(event){
    this.filteredString = event.target.value;
  }

}
