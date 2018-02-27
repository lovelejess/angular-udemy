import { Recipe } from '../recipe.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']

})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelectedFromListEvent = new EventEmitter<Recipe>();
  recipes: Recipe[] = [];
  public onRecipeSelectedFromList(recipe: Recipe) {
    this.recipeSelectedFromListEvent.emit(recipe);
  }

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
}
