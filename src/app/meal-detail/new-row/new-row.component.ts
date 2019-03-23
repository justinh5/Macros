import { Component, Output, EventEmitter } from '@angular/core';
import { SearchModalComponent } from '../search-modal/search-modal.component';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { UsdaDbService } from '../../services/usda-db.service';
import { FoodItem } from '../../models/food-item.model';
import { Nutrition } from '../../models/nutrition.model';
import { Measurement } from '../../models/measurement.model';

@Component({
  selector: 'app-new-row',
  templateUrl: './new-row.component.html',
  styleUrls: ['./new-row.component.scss'],
  providers: [UsdaDbService]
})
export class NewRowComponent {

  @Output() additionDone = new EventEmitter();

  description: string;
  measurement: string;
  measurements: string[];
  ndbno: string;
  nutrition: Nutrition;

  constructor(private dialog: MatDialog, private usdaService: UsdaDbService) {
    this.ndbno = null;
    this.description = '';
  }

  cancelNewItem() {
    this.additionDone.emit(null);
  }

  saveNewItem(qty: string) {
    // console.log('ndbno: ' + this.ndbno);
    // console.log('desc: ' + this.description);
    // console.log('measurement: ' + this.measurement);
    // console.log('qty: ' + qty);
    if(this.ndbno && this.description !== '' && this.measurement) {
      let newFood = new FoodItem(this.ndbno, this.description, this.measurement, parseFloat(qty), this.nutrition);
      this.additionDone.emit(newFood);
    }
  }

  openModal() {
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.data = "some dataaa";
    let dialogRef = this.dialog.open(SearchModalComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(id => {
      if(id)
        this.ndbno = id;
        this.populateRow(id);
    });
  }

  populateRow(ndbno: string) {

    this.usdaService.foodReportByNdbno(ndbno).subscribe(response => {
      let resp = response.json();
      this.description = resp.foods[0].food.desc.name;
      this.measurement = resp.foods[0].food.nutrients[0].measures[0].label;
      this.measurements = resp.foods[0].food.nutrients[0].measures.map(data => data.label);

      this.nutrition = new Nutrition(null, null, null, null);
      resp.foods[0].food.nutrients.forEach(nutrient => {
        switch(nutrient.nutrient_id) {
          case '208': {   //energy(calories)
            this.nutrition.energy = this.populateMeasurements(nutrient);
            break;
          }
          case '203': {   // Protein
            this.nutrition.protein = this.populateMeasurements(nutrient);
            break;
          }
          case '204': {   // lipids(fat)
            this.nutrition.fat = this.populateMeasurements(nutrient);
            break;
          }
          case '205': {   // Carbs by difference
            this.nutrition.carbs = this.populateMeasurements(nutrient);
            break;
          }
        }
      });
    });
  }

  populateMeasurements(nutrient: any) {
    let mList = [];
    if(nutrient.measures.length > 0) {
      nutrient.measures.forEach(unit => {
        mList.push(new Measurement(unit.label, unit.value));
      });
    }
    return mList;
  }

}
