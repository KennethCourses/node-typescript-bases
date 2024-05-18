import { buildLogger } from './plugins';

const logger = buildLogger('app.js');

logger.log('Hello from index.js');
logger.error('Error from index.js');