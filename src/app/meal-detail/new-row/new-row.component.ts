import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-row',
  templateUrl: './new-row.component.html',
  styleUrls: ['./new-row.component.scss']
})
export class NewRowComponent implements OnInit {

  @Output() additionDone = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  cancelNewItem() {
    this.additionDone.emit();
  }

  saveNewItem() {
    this.additionDone.emit();
  }

}
