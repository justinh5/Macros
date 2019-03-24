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
  @Input() itemList: any[];
  @Output() itemListChange = new EventEmitter();

  editOn: boolean;
  addOn: boolean;

  constructor(private mealService: MealsService) {
    this.addOn = false;
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
    this.addOn = false;
    if(newItem) {
      this.itemList.push(newItem);
      this.updateMeal();
    }
  }

  updateItem(ndbno: string) {
    this.editOn = true;
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
    setTimeout(() => {
      this.mealService.updateFoodItems(this.mealId, this.itemList);
      this.itemListChange.emit(this.itemList);
    });
  }


}
