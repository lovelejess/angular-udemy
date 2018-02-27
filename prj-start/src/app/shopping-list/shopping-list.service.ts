import { Ingredient } from "../common/ingredient.model";
import { EventEmitter } from "@angular/core";


export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 1),
        new Ingredient('Bananas', .79),
      ];

      public onAddNewIngredient: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

      public getIngredients(): Ingredient[] {
          return this.ingredients.slice();
      }

      public addIngredient(ingredient: Ingredient) {
          this.ingredients.push(ingredient);
      }

}