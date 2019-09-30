import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { component: AdminComponent, path: '' },
    ])
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
