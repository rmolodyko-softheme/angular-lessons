import { Inject, Injectable, Optional } from '@angular/core';
import { DEFAULT_LOG_LEVEL, LogLevel } from './console-logger.service';
import { Logger } from './logger';

@Injectable({
  providedIn: 'root'
})
export class DbLoggerService extends Logger {
  constructor(@Optional() @Inject(DEFAULT_LOG_LEVEL) private defaultLogLevel: LogLevel) {
    super();
  }

  log(text: string, logLevel?: LogLevel) {
    logLevel = logLevel !== undefined ? logLevel : this.defaultLogLevel;
    switch (logLevel) {
      case LogLevel.INFO:
        console.info('[DB LOGGER]', text);
        break;
      case LogLevel.ERROR:
        console.error('[DB LOGGER]', text);
        break;
      case LogLevel.WARNING:
        console.warn('[DB LOGGER]', text);
        break;
      default:
        console.log('[DB LOGGER]', text);
    }
  }
}
