import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FoodItem } from '../../models/food-item.model';

@Component({
  selector: 'app-item-table',
  templateUrl: './item-table.component.html',
  styleUrls: ['./item-table.component.scss']
})
export class ItemTableComponent implements OnInit {

  @Input() itemList: FoodItem[];
  @Output() itemListChange = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }

  deleteItem(ndbno: string) {
    if(confirm("Are you sure you want to remove?")) {
      for(let i=0; i<this.itemList.length; ++i) {
        if(this.itemList[i].ndbno === ndbno) {
          this.itemList.splice(i, 1);
          break;
        }
      }
      this.itemListChange.emit(this.itemList);
    }
  }


}
