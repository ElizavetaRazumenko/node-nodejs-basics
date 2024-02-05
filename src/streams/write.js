import fs from 'fs';
import { stdin } from 'process';

const write = async () => {
    const writableStream = fs.createWriteStream('./files/fileToWrite.txt');
    stdin.pipe(writableStream);
};

await write();