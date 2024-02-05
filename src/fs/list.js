import fs from 'fs/promises';
import { constants } from 'fs';

const customErrMessage = 'FS operation failed';

const list = async () => {
    try {
        await fs.access('files', constants.F_OK);
        const files = await fs.readdir('files');
        console.log(files);
    } catch (e) {
        throw Error(customErrMessage);
    }
};

await list();