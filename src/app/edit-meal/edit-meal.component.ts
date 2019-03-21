import { Component, Input, Output, EventEmitter} from '@angular/core';
import { MealsService } from '../services/meals.service';

@Component({
  selector: 'app-edit-meal',
  templateUrl: './edit-meal.component.html',
  styleUrls: ['./edit-meal.component.scss'],
  providers: [MealsService]
})
export class EditMealComponent {

  @Input() childSelectedMeal;
  @Output() editingDone = new EventEmitter();

  constructor(private mealService: MealsService) { }

  cancelItem() {
    this.editingDone.emit();
  }

  renameItem(item) {
    this.mealService.updateMeal(item);
    this.editingDone.emit();
  }

}
