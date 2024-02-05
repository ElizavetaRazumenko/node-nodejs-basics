import fs from 'fs/promises';
import { constants } from 'fs';

const customErrMessage = 'FS operation failed';

const rename = async () => {
    try {
        await fs.access('files/wrongFilename.txt', constants.F_OK);
    } catch(e) {
        throw Error(customErrMessage);
    }

    try {
        await fs.access('files/properFilename.md', constants.F_OK);
        throw Error(customErrMessage);
    } catch (e) {
        if (e.message !== customErrMessage) {
            await fs.rename('files/wrongFilename.txt', 'files/properFilename.md');
        } else throw Error(customErrMessage);
    }
    
};

await rename();