import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  private counter: number = 0;
  private interval; 
  @Output() public gameTimer = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    this.interval = setInterval(()=> {
      this.counter+=1
      console.log(this.counter);
      this.gameTimer.emit(this.counter);
    }, 2000);
  }

  onEndGame() {
    clearInterval(this.interval);
    console.log("game stopped");
  }
}
