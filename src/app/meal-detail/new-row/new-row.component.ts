import { Component, Input, Output, EventEmitter } from '@angular/core';
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

  @Input() addOn: boolean;
  @Input() editOn: boolean;
  @Input() set editItem(item: any) {
    this.ndbno = item.ndbno;
    this.description = item.description;
    this.measurement = item.measurement;
    this.measurements = item.measurements;
    this.qty = item.qty;
    this.nutrition = item.nutrition;
  };

  @Output() additionDone = new EventEmitter();
  @Output() editDone = new EventEmitter();

  description: string;
  measurement: string;
  measurements: string[];
  qty: string;
  ndbno: string;
  nutrition: Nutrition;

  constructor(private dialog: MatDialog, private usdaService: UsdaDbService) {
    this.ndbno = null;
    this.description = '';
    this.measurements = [];
    this.qty = "1";
  }

  cancelNewItem() {
    this.additionDone.emit(null);
    this.editDone.emit(null);
    console.log(this.ndbno);
  }

  saveNewItem(qty: string) {
    if(this.ndbno && this.description !== '' && this.measurement) {
      let newFood = new FoodItem(this.ndbno, this.description, this.measurement, this.measurements, parseFloat(qty), this.nutrition);
      if(this.addOn === true) {
        this.additionDone.emit(newFood);
      }
      else {
        this.editDone.emit(newFood);
      }
    }
  }

  openModal() {
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.data = "some dataaa";
    let dialogRef = this.dialog.open(SearchModalComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(id => {
      if(id) {
        this.ndbno = id;
        this.populateRow(id);
      }
    });
  }

  onChange(selection: any) {
    console.log(selection);
    this.measurement = selection;
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
