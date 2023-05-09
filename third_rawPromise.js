let {readFile, writeFile} = require('fs');
let path = require('path');
// let http = require('http');

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

let path1 = path.join(__dirname, "/textfiles", "text1.txt");
let path2 = path.join(__dirname, "/textfiles", "text2.txt");

geText(path1).then((text)=>console.log(text)).catch((err)=>console.log(err));
geText(path2).then((text)=>console.log(text)).catch((err)=>console.log(err));