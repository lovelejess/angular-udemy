import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `

  <app-child
    (childrenCrying)="onChildrenCrying($event)">
  </app-child>

  <h3> CryBabies </h3>
  
  <li *ngFor="let child of childrenCryingList">{{ child.name }} is {{ child.cryingStatus }} !</li>

  `,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  public childrenCryingList = [];
  
  constructor() { }

  ngOnInit() {
  }
  onChildrenCrying(child: {name: string, cryingStatus: string}) {
    this.childrenCryingList.push({name: child.name, cryingStatus: child.cryingStatus});
  }
}
