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

const isDbLogger = window.location.href.indexOf('logger=db') !== -1;
const isBothLoggers = window.location.href.indexOf('logger=both') !== -1;

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
      useFactory: (console, db, loggers: Logger[]) => {
        if (isBothLoggers) {
          return {
            log(text: string, logLevel: LogLevel) {
              loggers.forEach(logger => logger.log(text, logLevel));
            }
          }
        } else {
          return isDbLogger ? db : console;
        }
      },
      deps: [ConsoleLoggerService, DbLoggerService, LOGGER]
    },
    {
      provide: DEFAULT_LOG_LEVEL,
      useValue: LogLevel.ERROR
    }
  ]
})
export class AppModule { }
