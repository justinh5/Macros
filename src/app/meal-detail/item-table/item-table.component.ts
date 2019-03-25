import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FoodItem } from '../../models/food-item.model';
import { MealsService } from '../../services/meals.service';

@Component({
  selector: 'app-item-table',
  templateUrl: './item-table.component.html',
  styleUrls: ['./item-table.component.scss'],
  providers: [MealsService]
})
export class ItemTableComponent implements OnInit {

  @Input() mealId;
  @Output() itemListChange = new EventEmitter();

  itemList: any[];
  editOn: boolean;
  editNdbno: string;
  addOn: boolean;

  constructor(private mealService: MealsService) {
    this.addOn = false;
    this.editOn = false;
    this.itemList = [];
  }

  ngOnInit() {
    //retrieve items
    this.mealService.getItemsById(this.mealId).subscribe(data => {
      if(data.items) {
        this.itemList = data.items;
        this.updateMeal();
      }
    });
  }


  addNewItem() {
    this.addOn = true;
  }

  additionDone(newItem: FoodItem) {
    if(newItem) {
      this.itemList.push(newItem);
      this.updateMeal();
    }
    this.addOn = false;
  }

  updateItem(ndbno: string) {
    this.editOn = true;
    this.editNdbno = ndbno;
  }

  editDone(newItem: FoodItem) {
    if(newItem) {
      this.itemList.forEach(item => {
        if(item.ndbno === newItem.ndbno) {
          this.copyItem(item, newItem);
        }
      });
      this.updateMeal();
    }
    this.editOn = false;
    this.editNdbno = null;
  }

  copyItem(oldItem: any, newItem: any) {
    oldItem.description = newItem.description;
    oldItem.measurement = newItem.measurement;
    oldItem.measurements = newItem.measurements;
    oldItem.qty = newItem.qty;
    oldItem.nutrition = newItem.nutrition;
  }

  deleteItem(ndbno: string) {
    if(confirm("Are you sure you want to remove?")) {
      for(let i=0; i<this.itemList.length; ++i) {
        if(this.itemList[i].ndbno === ndbno) {
          this.itemList.splice(i, 1);
          this.updateMeal();
          break;
        }
      }
    }
  }

  updateMeal() {
    this.mealService.updateFoodItems(this.mealId, this.itemList);
    setTimeout(() => {
      this.itemListChange.emit(this.itemList);
    });
  }


}
