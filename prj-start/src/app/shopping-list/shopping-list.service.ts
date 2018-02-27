import { Ingredient } from "../common/ingredient.model";


export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 1),
        new Ingredient('Bananas', .79),
      ];

      public getIngredients(): Ingredient[] {
          return this.ingredients.slice();
      }

}