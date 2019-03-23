
import { Measurement } from './measurement.model';

export class Nutrition {
  constructor (
    public energy: Measurement[],
    public fat: Measurement[],
    public carbs: Measurement[],
    public protein: Measurement[]) { }
}
