import { Nutrition } from './nutrition.model';

export class FoodItem {
  constructor (
    public description: string,
    public ndbno: string,
    public measurement: string,
    public qty: number,
    public nutrition: Nutrition) { }
}
