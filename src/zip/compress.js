import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';

const compress = async () => {
    const readableStream = createReadStream('./files/fileToCompress.txt', 'utf-8');
    readableStream
    .pipe(createGzip())
    .pipe(createWriteStream('./files/archive.gz'));
};  

await compress();