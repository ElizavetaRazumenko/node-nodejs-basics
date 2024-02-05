import path from "path";
import fs from "fs";
import { release, version } from "os";
import { createServer as createServerHttp } from "http";
import "./files/c.js";

const __filename = import.meta.url;

const loadJSONFile = (path) =>
  JSON.parse(fs.readFileSync(new URL(path, __filename)));

const random = Math.random();

let unknownObject;

if (random > 0.5) {
  unknownObject = loadJSONFile("./files/a.json");
} else {
  unknownObject = loadJSONFile("./files/b.json");
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${path.dirname(__filename)}`);

const myServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});

export { unknownObject, myServer };
