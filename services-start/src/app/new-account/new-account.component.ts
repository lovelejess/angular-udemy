import { Component } from '@angular/core';
import { LoggingService } from 'app/logging.service';
import { AccountsService } from 'app/accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {
  constructor(private loggingService: LoggingService,
              private accountService: AccountsService) {
                this.accountService.statusUpdated.subscribe(
                  (status: string) => alert('New Status: ' + status)
                );
              }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
  }
}