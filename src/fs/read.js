import fs from 'fs/promises';
import { constants } from 'fs';

const customErrMessage = 'FS operation failed';

const read = async () => {
    try {
        await fs.access('files/fileToRead.txt', constants.F_OK);
        const content = await fs.readFile('files/fileToRead.txt', 'utf8');
        console.log(content);
    } catch (e) {
        throw Error(customErrMessage);
    }

};

await read();