import { Component } from '@angular/core';
import { UserService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeUsers: string[] = [];
  inactiveUsers: string[] = [];

  constructor(private userService: UserService) {
    this.activeUsers = this.userService.activeUsers;
    this.inactiveUsers = this.userService.inactiveUsers;
  }
  
  onSetToInactive(id: number) {
    // this.inactiveUsers.push(this.activeUsers[id]);
    // this.activeUsers.splice(id, 1);
    this.userService.setUserToInactive(id);
  }

  onSetToActive(id: number) {
    // this.activeUsers.push(this.inactiveUsers[id]);
    // this.inactiveUsers.splice(id, 1);
    this.userService.setUserToActive(id);
  }
}
