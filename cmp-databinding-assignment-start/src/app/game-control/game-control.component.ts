import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output('interval') public gameTimer = new EventEmitter<number>();
  public counter: number = 0;
  private interval; 
  
  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    this.interval = setInterval(()=> {
      this.counter+=1;
      console.log(this.counter);
      this.gameTimer.emit(this.counter);
    }, 2000);
  }

  onEndGame() {
    clearInterval(this.interval);
    console.log("game stopped");
  }
}
