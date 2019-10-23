import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { addUser } from './user.actions';
import { tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class UserEffect {
  addUserLogger$ = createEffect(() => this.actions$.pipe(
    ofType(addUser),
    tap((action) => {
      this.snackBar.open(`User ${action.user.name} was added to the list`);
    })
  ), { dispatch: false });

  constructor(
    private actions$: Actions,
    private snackBar: MatSnackBar
  ) {}
}
