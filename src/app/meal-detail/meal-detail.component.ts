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
  mealTitle: string;
  itemList: FoodItem[];


  constructor(private route: ActivatedRoute,
              private mealService: MealsService) {
    this.mealTitle = "";
    this.itemList = [];
  }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.mealId = urlParameters['id'];
    });
    this.mealService.getMealById(this.mealId).subscribe(data => {
      if(data.description)
        this.mealTitle = data.description;
    });
  }

}
