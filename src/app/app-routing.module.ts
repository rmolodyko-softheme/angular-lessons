import { NgModule } from '@angular/core';

import { UserModule } from './user/user.module';
import { RouterModule } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { component: UserListComponent, path: 'user-list' },
      { loadChildren: './admin/admin.module#AdminModule', path: 'admin' },
      { redirectTo: 'user-list', path: '**' }
    ]),
    UserModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
