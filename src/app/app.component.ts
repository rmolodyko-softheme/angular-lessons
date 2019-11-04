import { Component } from '@angular/core';
import { UserDataService } from './user/services/user-data.service';
import { Logger } from './loggers/logger';
import { LogLevel } from './loggers/console-logger.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private userDataService: UserDataService, private loggerService: Logger) {
    this.loggerService.log('Hello from app: ' + environment.appName, LogLevel.WARNING);
  }
}
