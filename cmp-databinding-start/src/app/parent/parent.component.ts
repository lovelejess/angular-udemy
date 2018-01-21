import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `

  <app-child
    (childrenCrying)="onChildrenCrying($event)">
  </app-child>

  <h3> CryBabies </h3>
  
  <li *ngFor="let child of childrenCryingList">{{child}}</li>

  `,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  public childrenCryingList: string[] = []
  constructor() { }

  ngOnInit() {
  }
  onChildrenCrying(child: {cryingStatus: string}) {
    this.childrenCryingList.push(child.cryingStatus);
  }
}
