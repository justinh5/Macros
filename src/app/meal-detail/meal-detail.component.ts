import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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

  @ViewChild('macroTable') macroTable;


  constructor(private route: ActivatedRoute,
              private mealService: MealsService) {
    this.mealTitle = "";
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

  updateTable(list: any[]){
    this.macroTable.updateNutrition(list);
  }

}
