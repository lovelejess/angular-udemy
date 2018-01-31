import { Ingredient } from '../common/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  public ingredients: Ingredient[] = [
    new Ingredient('Apples', 1),
    new Ingredient('Bananas', .79),
  ];
  constructor() { }

  ngOnInit() {
  }

  public onNewIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
