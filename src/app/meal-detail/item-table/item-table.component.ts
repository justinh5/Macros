import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-table',
  templateUrl: './item-table.component.html',
  styleUrls: ['./item-table.component.scss']
})
export class ItemTableComponent implements OnInit {

  @Input() list: string[];
  @Output() listChange = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }

  deleteItem() {
    let value = "cow";
    if(confirm("Are you sure you want to remove?")) {
      const index = this.list.indexOf(value, 0);
        if (index > -1) {
           this.list.splice(index, 1);
        }
      this.listChange.emit(this.list);
      console.log(this.list);
    }
  }


}
