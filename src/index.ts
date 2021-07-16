import './preStart';
import { connection } from './database';
import app from './Server';
import logger from './shared/Logger';


const port = Number(process.env.PORT || 3000);

app.listen(port, () => {
    logger.info('Express server started on port: ' + port);
    connection.once('open', () => {
        logger.info('Connection to database established successfully');
    });
});
