import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
  <button
  class="btn btn-primary"
  (click)="toggleChildCrying()">Help! Child Crying!</button>
  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output() public childrenCrying = new EventEmitter<{cryingStatus: string}>();

  public children: {}[] = [];
  public names: string[] = ['child1', 'child2', 'child3', 'child4'];
  public cryingStatus: string = 'not crying';

  constructor() { }

  ngOnInit() {
  }

  toggleChildCrying() {
    this.cryingStatus = this.cryingStatus == 'not crying' ? 'crying' : 'not crying'
    this.childrenCrying.emit({
      cryingStatus: this.cryingStatus
    });
  }

}
