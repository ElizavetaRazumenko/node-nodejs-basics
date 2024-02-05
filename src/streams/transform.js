import { pipeline, Transform } from 'stream';
import { stdout, stdin } from 'process';

const transform = async () => {
    const transformReverse = new Transform({
      transform(chunk, encoding = 'utf-8', callback) {
        const reverseStr = chunk.toString().split('').reverse().join('');
        callback(null, reverseStr + '\n')
      }
    })

    pipeline(
      stdin,
      transformReverse,
      stdout,
      (error) => {
        console.error(error);
      }
    )
  };

await transform();