import { Ingredient } from "../common/ingredient.model";
import { Subject } from "rxjs/Subject";


export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 1),
        new Ingredient('Bananas', .79),
      ];

      public ingredientsChanged: Subject<Ingredient[]> = new Subject<Ingredient[]>();

      public getIngredients(): Ingredient[] {
          return this.ingredients.slice();
      }

      public addIngredient(ingredient: Ingredient) {
          this.ingredients.push(ingredient);
          this.ingredientsChanged.next(this.getIngredients());
      }

      public addIngredients(ingredients: Ingredient[]) {
        // this.ingredients.push(...ingredients);
        this.ingredients.concat(ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

}