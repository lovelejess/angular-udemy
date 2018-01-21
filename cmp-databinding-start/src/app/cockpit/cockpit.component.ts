import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() public serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') public blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  @ViewChild('serverContentInput') serverContentInput: ElementRef;
  // @ViewChild(CockpitComponent) serverContentInput;

  public serverElements = [];
  public newServerName = '';
  public newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddBlueprint(serverName: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: serverName.value, 
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddServer(serverName: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: serverName.value, 
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

}
