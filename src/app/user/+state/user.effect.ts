import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { addUser } from './user.actions';
import { first, switchMap, tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';
import { ChatService } from '../../chat/services/chat.service';
import { AppState } from '../../app.state';
import { Store } from '@ngrx/store';
import { selectCurrentUser } from './user.selectors';

@Injectable()
export class UserEffect {
  addUserLogger$ = createEffect(() => this.actions$.pipe(
    ofType(addUser),
    tap((action) => {
      this.snackBar.open(`User ${action.user.name} was added to the list`);
    })
  ), { dispatch: false });

  addUserChatLogger$ = createEffect(() => this.actions$.pipe(
    ofType(addUser),
    switchMap((action) => this.store.select(selectCurrentUser).pipe(
      first(),
      tap(() => console.log('run')),
      switchMap(username => {
        return this.chatService.init(username).pipe(first(), tap(() => {
          this.chatService.sendMessage(`User ${action.user.name} was added.`);
        }))
      }),
    )),
  ), { dispatch: false });

  constructor(
    private store: Store<AppState>,
    private chatService: ChatService,
    private actions$: Actions,
    private snackBar: MatSnackBar
  ) {}
}
