import fs from 'fs/promises';
import { constants } from 'fs';

const text = 'I am fresh and young';
const customErrMessage = 'FS operation failed';

const create = async () => {
    try {
        await fs.access('files/fresh.txt', constants.F_OK);
        throw Error(customErrMessage);
    } catch (e) {
        if (e.message !== customErrMessage) {
            await fs.writeFile('files/fresh.txt', text);
        } else throw Error(customErrMessage);
    }
};

await create();