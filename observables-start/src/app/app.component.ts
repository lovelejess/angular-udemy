import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public user1Activated: boolean = false;
  public user2Activated: boolean = false;

  constructor(private userService: UsersService) {

  }
  ngOnInit() {
    this.userService.userActivated.subscribe(
      (id: number) => {
        if (id == 1) {
          this.user1Activated = true;
        } else if (id == 2) {
          this.user2Activated = true;
        }
      }
    );
  }

}
