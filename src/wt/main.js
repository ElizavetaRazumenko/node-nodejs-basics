import os from 'os';
import { Worker } from 'worker_threads';

const performCalculations = async () => {
    let startAdditionalNumber = 10;

    const promises = os.cpus().map(() => {
        return new Promise((res, rej) => {
          const worker = new Worker('./worker.js', { workerData: startAdditionalNumber++ });
          worker.on('message', res);
          worker.on('error', rej);
        });
      });

    const workerData = await Promise.allSettled(promises);
    
    const result = workerData.map(({ status, value }) => ({
      status: status === 'rejected' ? 'error' : 'resolved',
      data: status === 'rejected' ? null : value
    }));
  
    console.log(result);
};

await performCalculations();