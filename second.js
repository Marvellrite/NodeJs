let http = require('http');

const server = http.createServer((req, res) => {
    res.write('Marvel Welcomes You');
    switch(req.url) {
        case'/':
            res.write("\nHomepage");
            break;
        case'/about':
            for(let i=0; i<1000; i++) {
                for(let j=0; j<1000; j++){
                // console.log(`i is ${i} and j is ${j}`);

                }

            }
            res.write("\nAbout Page");
            break;
        default:
            res.write("\nNot Found");
            break;
    }

    res.end();
});

server.listen(5000, () => {
    console.log('Server runiing at port 5000')
});