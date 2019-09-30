import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { Logger } from './logger';

export const DEFAULT_LOG_LEVEL = new InjectionToken('DEFAULT_LOG_LEVEL');

export enum LogLevel {
  INFO,
  ERROR,
  WARNING
}

@Injectable({
  providedIn: 'root'
})
export class ConsoleLoggerService extends Logger {
  constructor(@Optional() @Inject(DEFAULT_LOG_LEVEL) private defaultLogLevel: LogLevel) {
    super();
  }

  log(text: string, logLevel?: LogLevel) {
    logLevel = logLevel !== undefined ? logLevel : this.defaultLogLevel;
    switch (logLevel) {
      case LogLevel.INFO:
        console.info('[CONSOLE LOGGER]', text);
        break;
      case LogLevel.ERROR:
        console.error('[CONSOLE LOGGER]', text);
        break;
      case LogLevel.WARNING:
        console.warn('[CONSOLE LOGGER]', text);
        break;
      default:
        console.log('[CONSOLE LOGGER]', text);
    }
  }
}
