import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { BadgeComponent } from './badge-component/badge.component';
import { UserDataService } from './services/user-data.service';
import { PrefixNamePipe } from './prefix-name/prefix-name.pipe';
import { BadgeTextPipe } from './badge-text/badge-text.pipe';
import { CurrentUserComponent } from './current-user/current-user.component';

@NgModule({
  declarations: [
    UserListComponent,
    BadgeComponent,
    PrefixNamePipe,
    BadgeTextPipe,
    CurrentUserComponent
  ],
  exports: [UserListComponent, CurrentUserComponent],
  entryComponents: [CurrentUserComponent],
  providers: [UserDataService],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
