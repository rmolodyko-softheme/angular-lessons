import { LogLevel } from './console-logger.service';
import { InjectionToken } from '@angular/core';

export const LOGGER = new InjectionToken('LOGGER');

export abstract class Logger {
  abstract log(text: string, logLevel?: LogLevel)
}
