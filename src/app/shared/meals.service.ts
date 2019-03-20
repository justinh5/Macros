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

  getMealById(albumId: string){
    // return this.database.object('meals/' + mealId);
  }

  updateMeal(localUpdatedMeal){
    // var mealEntryInFirebase = this.getMealById(localUpdatedMeal.$key);
    // mealEntryInFirebase.update({title: localUpdatedAlbum.title,
    //                             artist: localUpdatedAlbum.artist,
    //                             description: localUpdatedAlbum.description});
  }

}
