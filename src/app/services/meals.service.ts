import { Injectable } from '@angular/core';
import { Meal } from '../models/meal.model';
import { FoodItem } from '../models/food-item.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class MealsService {

  meals: FirebaseListObservable<any[]>;
  mealItems: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.meals = database.list('meals');
    this.mealItems = database.list('mealItems');
  }

  getMeals() {
    return this.meals;
  }

  addMeal(newMeal: Meal) {
    this.meals.push(newMeal);
  }

  updateFoodItems(id: string, foodList: FoodItem[]) {
    this.database.object(`mealItems/${id}`).set({ items: foodList });
  }

  getMealById(id: string){
    return this.database.object('meals/' + id);
  }

  getItemsById(id: string) {
    return this.database.object('mealItems/' + id);
  }

  updateMeal(localUpdatedMeal){
    let mealEntryInFirebase = this.getMealById(localUpdatedMeal.$key);
    mealEntryInFirebase.update({description: localUpdatedMeal.description});
  }

  deleteMeal(item) {
    this.getMealById(item.$key).remove();
    this.getItemsById(item.$key).remove();
  }

}
