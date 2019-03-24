import { Component, Input, OnChanges } from '@angular/core';
import { FoodItem } from '../../models/food-item.model';

@Component({
  selector: 'app-macro-table',
  templateUrl: './macro-table.component.html',
  styleUrls: ['./macro-table.component.scss']
})
export class MacroTableComponent {

  @Input() itemList: any[];

  calories: number;
  fat: number;
  carbs: number;
  protein: number;

  constructor() {
    this.zeroSums();
  }

  ngOnChanges(changes) {
    this.updateNutrition();
  }

  zeroSums() {
    this.calories = this.fat = this.carbs = this.protein = 0;
  }

  updateNutrition() {
    this.zeroSums();
    this.itemList.forEach(item => {

      if(item.nutrition.energy) {
        item.nutrition.energy.forEach(unit => {
          if(unit.label === item.measurement) {
            this.calories += parseFloat(unit.value);
          }
        })
      }
      if(item.nutrition.fat) {
        item.nutrition.fat.forEach(unit => {
          if(unit.label === item.measurement) {
            this.fat += parseFloat(unit.value);
          }
        })
      }
      if(item.nutrition.carbs) {
        item.nutrition.carbs.forEach(unit => {
          if(unit.label === item.measurement) {
            this.carbs += parseFloat(unit.value);
          }
        })
      }
      if(item.nutrition.protein) {
        item.nutrition.protein.forEach(unit => {
          if(unit.label === item.measurement) {
            this.protein += parseFloat(unit.value);
          }
        })
      }
    });
  }

}
