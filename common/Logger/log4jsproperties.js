"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appSettings = void 0;
exports.appSettings = {
    log4js: {
        traceLogConfig: {
            appenders: {
                fileAppender: {
                    type: 'file',
                    filename: './output/log4js.log' /* ,
                    layout: {
                        type: 'pattern',
                        pattern: '%d - %c:[%p]: %m'
                    } */
                },
                consoleAppender: {
                    type: 'console',
                    layout: {
                        type: 'pattern',
                        pattern: '%d - [%p]: %m'
                    }
                }
            },
            categories: {
                default: {
                    appenders: ['fileAppender', 'consoleAppender'],
                    level: 'info'
                }
            }
        }
    }
};
