import { Injectable } from '@angular/core';
import { Meal } from '../models/meal.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class MealsService {

  meals: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.meals = database.list('meals');
  }

  getMeals() {
    return this.meals;
  }

  addMeal(newMeal: Meal) {
    this.meals.push(newMeal);
  }

  getMealById(mealId: string){
    return this.database.object('meals/' + mealId);
  }

  updateMeal(localUpdatedMeal){
    let mealEntryInFirebase = this.getMealById(localUpdatedMeal.$key);
    mealEntryInFirebase.update({description: localUpdatedMeal.description});
  }

  deleteMeal(item) {
    this.getMealById(item.$key).remove();
  }

}
