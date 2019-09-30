import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { BadgeComponent } from './badge-component/badge.component';
import { UserDataService } from './services/user-data.service';

@NgModule({
  declarations: [UserListComponent, BadgeComponent],
  exports: [UserListComponent],
  providers: [UserDataService],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
