import crypto from 'crypto'; 
import fs from 'fs/promises';

const calculateHash = async () => {
    const content = await fs.readFile('./files/fileToCalculateHashFor.txt', 'utf-8');
    const hash = crypto.createHash('sha256').update(content).digest('hex');
    console.log(hash);
};

await calculateHash();