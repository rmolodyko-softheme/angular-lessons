import { Component, OnInit } from '@angular/core';
import { Logger } from './loggers/logger';
import { LogLevel } from './loggers/console-logger.service';
import { MatDialog } from '@angular/material';
import { CurrentUserComponent } from './user/current-user/current-user.component';
import { Store } from '@ngrx/store';
import { CounterState } from './+state/counter.reducer';
import { decrement, increment } from './+state/counter.actions';
import { Observable } from 'rxjs';
import { selectCount } from './+state/counter.selectors';
import { clearCurrentUser, setCurrentUser } from './user/+state/user.actions';
import { selectCurrentUser } from './user/+state/user.selectors';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  counter$: Observable<number>;
  username$: Observable<string>;

  constructor(
    private loggerService: Logger,
    private matDialog: MatDialog,
    private store: Store<{ count: CounterState }>
) {
    this.loggerService.log('Hello from app', LogLevel.WARNING);
  }

  ngOnInit() {
    this.counter$ = this.store.select(selectCount);
    this.username$ = this.store.select(selectCurrentUser);

    this.username$.pipe(first()).subscribe(username => {
      if (!username) {
        setTimeout(() => {
          this.matDialog.open(CurrentUserComponent).afterClosed().subscribe(username => {
            if (username) {
              this.store.dispatch(setCurrentUser({ username }));
            }
          });
        });
      }
    });
  }

  remove() {
    this.store.dispatch(clearCurrentUser());
    window.location.reload();
  }

  increment() {
    this.store.dispatch(increment({ step: 5 }));
  }

  decrement() {
    this.store.dispatch(decrement());
  }
}
