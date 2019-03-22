import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material";
import { MAT_DIALOG_DATA } from "@angular/material";
import { UsdaDbService } from '../../services/usda-db.service';

@Component({
  selector: 'app-search-modal',
  templateUrl: './search-modal.component.html',
  styleUrls: ['./search-modal.component.scss'],
  providers: [UsdaDbService]
})
export class SearchModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SearchModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private usdaService: UsdaDbService) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close("Thanks for using me!");
  }

}



// public dialogRef: MatDialogRef<SearchModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any
