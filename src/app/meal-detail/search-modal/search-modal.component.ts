import { Component, Inject } from '@angular/core';
import { MatDialogRef } from "@angular/material";
import { MAT_DIALOG_DATA } from "@angular/material";
import { UsdaDbService } from '../../services/usda-db.service';

@Component({
  selector: 'app-search-modal',
  templateUrl: './search-modal.component.html',
  styleUrls: ['./search-modal.component.scss'],
  providers: [UsdaDbService]
})
export class SearchModalComponent {

  resultList: any;
  selectedNdbno: string;

  constructor(public dialogRef: MatDialogRef<SearchModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private usdaService: UsdaDbService) { }

  searchFoods(query: string) {
    this.usdaService.foodQuery(query).subscribe( response => {
      let resp = response;
      if(resp && resp.list && resp.list.item) {
        this.resultList = resp.list.item.map(item => {
          return {
            name: item.name,
            ndbno: item.ndbno
          };
        });
      }
    });
  }

  selectItem(id: string) {
    this.dialogRef.close(id);
  }

  close() {
    this.dialogRef.close(null);
  }

}
