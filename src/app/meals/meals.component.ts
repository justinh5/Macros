import { Component, OnInit } from '@angular/core';
import { Meal } from '../models/meal.model';
import { Router } from '@angular/router';
import { MealsService } from '../services/meals.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss'],
  providers: [MealsService]
})
export class MealsComponent implements OnInit {

  selectedMeal;
  meals: FirebaseListObservable<any[]>;
  addOn: boolean;
  editOn: boolean;

  constructor(private router: Router, private mealService: MealsService) {
    this.addOn = false;
    this.editOn = false;
  }

  ngOnInit() {
    this.meals = this.mealService.getMeals();
  }

  addNewItem() {
    this.addOn = true;
  }

  saveNewItem(newDescription) {
    this.addOn = false;
    let newItem = new Meal(newDescription, null, []);
    this.mealService.addMeal(newItem);
  }

  cancelItem() {
    this.addOn = false;
    this.editOn = false;
  }

  selectEdit(item) {
    this.editOn = true;
    this.selectedMeal = item;
  }

  finishedEditing() {
    this.editOn = false;
    this.selectedMeal = null;
  }

  deleteItem(item) {
    if(confirm("Are you sure you want to remove?") === true)
      this.mealService.deleteMeal(item);
  }

  goToDetailPage(clickedMeal) {
     this.router.navigate(['meal', clickedMeal.$key]);
  }

}
