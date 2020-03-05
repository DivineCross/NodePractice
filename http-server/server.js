import http from 'http'
import { compileFunction } from 'vm';

const indentSize = 4;
const indentChar = ' ';
const indentation = indentChar.repeat(indentSize);

const server = http.createServer();

server.on('request', (req, res) => {
    const writeLine = (v = '') =>
        res.write(`${v}\n`);

    writeLine(`RequestMethod: ${req.method}`);
    writeLine(`RequestUrl: ${req.url}`);
    writeLine(`RequestRawHeaders:`);
    writeLine(req.rawHeaders
        .map(h => `${indentation}${h}`)
        .join('\n'));

    writeLine();
    writeLine('Hello Http Request!');

    res.end();
});

server.listen(5600);
