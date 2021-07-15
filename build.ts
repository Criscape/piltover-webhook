/**
 * Remove old files, copy front-end ones.
 */

import fs from 'fs-extra';
import Logger from 'jet-logger';


try {
    fs.removeSync('./dist/');
    fs.copySync('./src/public', './dist/public');
    fs.copySync('./src/views', './dist/views');
} catch (err) {
    Logger.Err(err);
}
