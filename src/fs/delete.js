import fs from 'fs/promises';

const customErrMessage = 'FS operation failed';

const remove = async () => {
    try {
        await fs.unlink('files/fileToRemove.txt');
    } catch (e) {
        throw Error(customErrMessage);
    }
};

await remove();