const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>enter message</title></head>');
        res.write('<body>Hello User.</body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/users') {
        res.write('<html>');
        res.write('<head><title>enter message</title></head>');
        res.write('<body><ul><li>user 1</li><li>user 2</li><li>user 3</li></ul></body>');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">create</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const username = parsedBody;
            fs.writeFile('usernames.txt', username, err => {
                res.statusCode = 302;
                return res.end();
            })
        })
    }
};

module.exports = requestHandler;