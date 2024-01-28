import { createReadStream, createWriteStream } from 'fs';
import { createUnzip } from 'zlib';

const decompress = async () => {
    const readableStream = createReadStream('./files/archive.gz');
    readableStream
    .pipe(createUnzip())
    .pipe(createWriteStream('./files/fileToCompress.txt'));
};

await decompress();