import fs from 'fs';
import { stdout } from 'process';

const read = async () => {
    const readableStream = fs.createReadStream('./files/fileToRead.txt', 'utf-8');
    readableStream.pipe(stdout);
};

await read();