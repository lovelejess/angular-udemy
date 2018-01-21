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
  @ViewChild('serverName') serverName: ElementRef;
  // @ViewChild(CockpitComponent) serverContentInput;

  public serverElements = [];
  public newServerName = '';
  public newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.serverName.nativeElement.value, 
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddServer(serverName: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: this.serverName.nativeElement.value, 
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

}
