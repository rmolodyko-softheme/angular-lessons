import { Component, OnInit } from '@angular/core';
import { UserDataService } from './user/services/user-data.service';
import { Logger } from './loggers/logger';
import { LogLevel } from './loggers/console-logger.service';
import { UserService } from './user/services/user.service';
import { MatDialog } from '@angular/material';
import { CurrentUserComponent } from './user/current-user/current-user.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private userDataService: UserDataService,
    private loggerService: Logger,
    private matDialog: MatDialog,
    public userService: UserService,
) {
    this.loggerService.log('Hello from app', LogLevel.WARNING);
  }

  ngOnInit() {
    if (!this.userService.getUser()) {
      setTimeout(() => {
        this.matDialog.open(CurrentUserComponent).afterClosed().subscribe(username => {
          if (username) {
            this.userService.setUser(username);
          }
        });
      });
    }
  }

  remove() {
    this.userService.setUser('');
    window.location.reload();
  }
}
