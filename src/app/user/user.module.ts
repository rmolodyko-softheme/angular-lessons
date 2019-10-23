import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { BadgeComponent } from './badge-component/badge.component';
import { PrefixNamePipe } from './prefix-name/prefix-name.pipe';
import { BadgeTextPipe } from './badge-text/badge-text.pipe';
import { CurrentUserComponent } from './current-user/current-user.component';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './+state/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffect } from './+state/user.effect';
import { MatSnackBarModule } from '@angular/material';

@NgModule({
  declarations: [
    UserListComponent,
    BadgeComponent,
    PrefixNamePipe,
    BadgeTextPipe,
    CurrentUserComponent,
  ],
  exports: [UserListComponent, CurrentUserComponent],
  entryComponents: [CurrentUserComponent],
  imports: [
    CommonModule,
    MatSnackBarModule,
    StoreModule.forFeature('user', userReducer),
    EffectsModule.forFeature([UserEffect])
  ]
})
export class UserModule { }
