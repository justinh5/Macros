
import { FoodItem } from './food-item.model';

export class Meal {
  constructor (
    public description: string,
    public path: null,
    public items: FoodItem) { }
}
