import './preStart';
import app from '@server';
import logger from '@shared/Logger';
import { connection } from './database';


const port = Number(process.env.PORT || 3000);

app.listen(port, () => {
    logger.info('Express server started on port: ' + port);
    connection.once('open', () => {
        logger.info('Connection to database established successfully');
    });
});
