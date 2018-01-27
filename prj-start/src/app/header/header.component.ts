import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private isRecipeSelected: boolean = false;
  @Output() recipesSelected = new EventEmitter<boolean>();
  
  constructor() { }

  ngOnInit() {
  }

  onRecipes() {
    this.isRecipeSelected = !this.isRecipeSelected;
    this.recipesSelected.emit(this.isRecipeSelected);
  }

}
