import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchModalComponent } from '../search-modal/search-modal.component';
import { MatDialog, MatDialogConfig } from "@angular/material";

@Component({
  selector: 'app-new-row',
  templateUrl: './new-row.component.html',
  styleUrls: ['./new-row.component.scss']
})
export class NewRowComponent implements OnInit {

  @Output() additionDone = new EventEmitter();

  ndbno: string;

  constructor(private dialog: MatDialog) {
    this.ndbno = null;
  }

  ngOnInit() {
  }

  cancelNewItem() {
    this.additionDone.emit();
  }

  saveNewItem() {
    this.additionDone.emit();
  }

  openModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = "some dataaa";
    let dialogRef = this.dialog.open(SearchModalComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(value => {
      console.log(`Dialog sent: ${value}`);
    });
  }

}
