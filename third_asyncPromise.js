let {readFile, writeFile} = require('fs');
let path = require('path');
// const { start } = require('repl');
// let http = require('http');

let path1 = path.join(__dirname, "/textfiles", "text1.txt");
let path2 = path.join(__dirname, "/textfiles", "text2.txt");

function geText(path) {
    return new Promise((resolve, reject)=> {
        readFile(path, 'utf-8', (err, data) => {
            if(err) {
                reject(err);
            }
            else{
                resolve(data);
            }
        });
    });
}

let start = async () => {
    try {
        let first = await geText(path1);
        let second = await geText(path2);
        console.log(first);
        console.log(second);
    }

    catch (err) {
        console.log(err);
    }
}

start();
console.log(path1);