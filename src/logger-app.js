const { buildLogger } = require("./plugins");

const logger = buildLogger('app.js');

logger.log('Hello from app.js');
logger.error('Error from app.js');