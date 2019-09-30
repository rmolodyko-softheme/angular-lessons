import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BadgeComponent } from './badge-component/badge.component';

@NgModule({
  declarations: [
    AppComponent,
    BadgeComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
    BadgeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
