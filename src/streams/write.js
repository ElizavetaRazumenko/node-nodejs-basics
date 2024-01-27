import fs from 'fs';

const write = async () => {
    const writableStream = fs.createWriteStream('./files/fileToWrite.txt');

    process.stdin.on('data', (chunk) => {
        writableStream.write(chunk);
    });

    process.stdin.on('end', () => {
        writableStream.close();
    });
};

await write();