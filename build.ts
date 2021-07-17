import fs from 'fs-extra';
import Logger from 'jet-logger';


try {
    fs.removeSync('./dist/');
} catch (err) {
    Logger.Err(err);
}