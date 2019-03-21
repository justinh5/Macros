import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Meal } from '../models/meal.model';
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

  constructor(private route: ActivatedRoute,
              private mealService: MealsService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.mealId = urlParameters['id'];
    });
    this.mealService.getMealById(this.mealId).subscribe(data => {
      this.displayMeal = data;
    });
  }

}
