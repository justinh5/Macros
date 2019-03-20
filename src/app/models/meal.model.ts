
import { FoodItem } from './food-item.model';

export class Meal {

  // public path: null;
  // public items: null;


  constructor (public description: string,
               public path: string,
               public items: FoodItem[]) { }
}
