import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

  isOdd(int: number) {
    console.log("determining if odd");
    return int % 2 != 0;
  }
}
