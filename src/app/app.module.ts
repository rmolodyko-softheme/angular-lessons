import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BadgeAttributiveDirective } from './badge-attributive/badge-attributive.directive';
import { BadgeStructuralDirective } from './badge-structural/badge-structural.directive';
import { BadgeComponent } from './badge-component/badge.component';

@NgModule({
  declarations: [
    AppComponent,
    BadgeAttributiveDirective,
    BadgeStructuralDirective,
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
