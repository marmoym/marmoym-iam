import * as fs from 'fs';
import * as path from 'path';
import * as util from 'util';
import * as winston from 'winston';

import { PROD_ENV } from '@utils/envUtils';

const LOG_PATH = path.resolve(__dirname, '../../logs');
if (!fs.existsSync(LOG_PATH)){
  fs.mkdirSync(LOG_PATH);
}

/**
 * Log format
 * @see https://github.com/winstonjs/logform
 */
const splat = winston.format(function (info) {
  if (info.splat) {
    info.message = util.format(info.message, ...info.splat);
  }
  delete info.splat;
  return info;
});

const consoleLogger = new winston.transports.Console({
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.colorize(),
    winston.format.splat(),
    winston.format.printf((info) => {
      return `${info.timestamp} ${info.level}: ${info.message}`
    }),
  ),
  level: 'debug',
});

const Logger = winston.createLogger({
  transports: [
    ...(!PROD_ENV ? [consoleLogger] : []),
  ],
});

export default Logger;
