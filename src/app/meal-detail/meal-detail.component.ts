import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Meal } from '../models/meal.model';
import { FoodItem } from '../models/food-item.model';
import { MealsService } from '../services/meals.service';

@Component({
  selector: 'app-meal-detail',
  templateUrl: './meal-detail.component.html',
  styleUrls: ['./meal-detail.component.scss'],
  providers: [MealsService]
})
export class MealDetailComponent implements OnInit {

  mealId: string;
  displayMeal: Meal;
  addOn: boolean;
  itemList: string[];

  constructor(private route: ActivatedRoute,
              private mealService: MealsService) {
    this.addOn = false;
  }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.mealId = urlParameters['id'];
    });
    this.mealService.getMealById(this.mealId).subscribe(data => {
      this.displayMeal = data;
    });

  }

  addNewItem() {
    this.addOn = true;
  }

  additionDone() {
    this.addOn = false;
  }


}
