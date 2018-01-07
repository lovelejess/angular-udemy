import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  severCreationStatus: string = 'not created';
  serverName: string = '';

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    } , 2000);

  }

  ngOnInit() {
  }

  onCreateServer() {
    this.severCreationStatus = 'created for ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
