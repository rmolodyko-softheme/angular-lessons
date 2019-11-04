import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import localeUA from '@angular/common/locales/uk';
registerLocaleData(localeUA, 'ua');

import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { AppRoutingModule } from './app-routing.module';
import { ConsoleLoggerService, DEFAULT_LOG_LEVEL, LogLevel } from './loggers/console-logger.service';
import { LOGGER, Logger } from './loggers/logger';
import { DbLoggerService } from './loggers/db-logger.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: LOGGER,
      useClass: DbLoggerService,
      multi: true
    },
    {
      provide: LOGGER,
      useClass: ConsoleLoggerService,
      multi: true
    },
    {
      provide: Logger,
      useFactory: (console) => {
        return console;
      },
      deps: [ConsoleLoggerService]
    },
    {
      provide: DEFAULT_LOG_LEVEL,
      useValue: LogLevel.ERROR
    }
  ]
})
export class AppModule { }
