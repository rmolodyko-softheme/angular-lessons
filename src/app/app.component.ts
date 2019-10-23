import { Component, OnInit } from '@angular/core';
import { Logger } from './loggers/logger';
import { LogLevel } from './loggers/console-logger.service';
import { UserService } from './user/services/user.service';
import { MatDialog } from '@angular/material';
import { CurrentUserComponent } from './user/current-user/current-user.component';
import { Store } from '@ngrx/store';
import { CounterState } from './+state/counter.reducer';
import { decrement, increment } from './+state/counter.actions';
import { Observable } from 'rxjs';
import { selectCount } from './+state/counter.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  counter$: Observable<number>;

  constructor(
    private loggerService: Logger,
    private matDialog: MatDialog,
    private store: Store<{ count: CounterState }>,
    public userService: UserService,
) {
    this.loggerService.log('Hello from app', LogLevel.WARNING);
  }

  ngOnInit() {
    this.counter$ = this.store.select(selectCount);

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

  increment() {
    this.store.dispatch(increment({ step: 5 }));
  }

  decrement() {
    this.store.dispatch(decrement());
  }
}
