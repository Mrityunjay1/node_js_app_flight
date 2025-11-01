const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const customFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});


const logger = createLogger({
    level: 'info',
    format: combine(
        label({ label: 'Node.js' }),
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        customFormat
    ),
    transports: [
        new transports.Console(),
        new transports.File({ filename: 'combined.log' }),
    ],
});

module.exports = logger;