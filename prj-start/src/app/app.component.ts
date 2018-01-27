import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public isRecipesSelected:boolean = false;
  public isShoppingSelected:boolean = false;

  ngOnInit(){}

  onRecipesSelected(isSelected: boolean) {
    this.isRecipesSelected = isSelected;
  }

  onShoppingSelected(isSelected: boolean) {
    this.isShoppingSelected = isSelected;
  }
}
