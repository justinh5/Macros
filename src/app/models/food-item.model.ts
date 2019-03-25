import { Nutrition } from './nutrition.model';

export class FoodItem {
  constructor (
    public ndbno: string,
    public description: string,
    public measurement: string,
    public measurements: string[],
    public qty: number,
    public nutrition: Nutrition) { }
}
