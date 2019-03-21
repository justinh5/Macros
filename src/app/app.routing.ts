import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent }   from './shared/about/about.component';
import { MealsComponent }   from './meals/meals.component';
import { MealDetailComponent }   from './meal-detail/meal-detail.component';


const appRoutes: Routes = [
  {
    path: '',
    component: MealsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'meal/:id',
    component: MealDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
