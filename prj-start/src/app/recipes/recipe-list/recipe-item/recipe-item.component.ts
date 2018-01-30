import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() public recipeElement: Recipe;
  @Output() public recipeItemSelectedEvent = new EventEmitter<Recipe>();
  
  constructor() { }

  ngOnInit() {
  }

  public onRecipeItemSelected() {
    this.recipeItemSelectedEvent.emit();
    console.log('onRecipeItemSelected');
  }

}
