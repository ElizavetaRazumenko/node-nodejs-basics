import fs from 'fs/promises';
import { constants } from 'fs';

const customErrMessage = 'FS operation failed';

const copy = async () => {
    try {
        await fs.access('files', constants.F_OK);
        const files = await fs.readdir('files');
        
        try {
            await fs.access('files_copy', constants.F_OK);
            throw Error(customErrMessage);
        } catch (e) {
            if (e.message !== customErrMessage) {
                fs.mkdir('files_copy');
                files.forEach(async (file) => {
                    const content = await fs.readFile(`files/${file}`, 'utf8');
                    await fs.writeFile(`files_copy/${file}`, content);
                });
            } else throw Error(customErrMessage);
        }
    } catch (e) {
        throw Error(customErrMessage);
    }
};

await copy();
