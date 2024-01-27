import fs from 'fs';

const read = async () => {
    const readableStream = fs.createReadStream('./files/fileToRead.txt', 'utf-8');

    readableStream.on('data', (chunk) => { 
        process.stdout.write(chunk); 
    });
};

await read();