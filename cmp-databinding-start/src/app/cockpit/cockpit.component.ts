import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() public serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() public blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  public serverElements = [];
  public newServerName = '';
  public newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.newServerName, 
      serverContent: this.newServerContent
    });
  }

  onAddServer() {
    this.serverCreated.emit({
      serverName: this.newServerName, 
      serverContent: this.newServerContent
    });
  }

}
