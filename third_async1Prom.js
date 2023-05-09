let {readFile, writeFile} = require('fs');
let util = require('util');

let readFileProm = util.promisify(readFile);
let writeFileProm = util.promisify(writeFile);

// readFileProm('textfiles/text1.txt', 'utf-8').then((text)=>console.log(text)).catch((err)=>console.log(err));

let start = async()=> {
    try {
        result1 = await readFileProm('textfiles/text1.txt', 'utf-8');
        result2 = await readFileProm('textfiles/text2.txt', 'utf-8');
        await writeFileProm('textfiles/text3.txt', `text1.txt: ${result1}  \n text2.txt: ${result2}`);
    } catch (error) {
        console.log("The error is this: ", error);
    }
}

start();