import { Component, OnInit } from '@angular/core';
import { Meal } from '../models/meal.model';
import { Router } from '@angular/router';
import { MealsService } from '../shared/meals.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss'],
  providers: [MealsService]
})
export class MealsComponent implements OnInit {

  meals: FirebaseListObservable<any[]>;
  editOn: boolean;

  constructor(private router: Router, private mealService: MealsService) {
    this.editOn = false;
  }

  ngOnInit() {
    this.meals = this.mealService.getMeals();
  }

  addNewItem() {
    this.editOn = true;
  }

  saveItem() {
    this.editOn = false;
  }

  cancelItem() {
    this.editOn = false;
  }

}
