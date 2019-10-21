import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { component: ChatComponent, path: '' },
    ])
  ],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
