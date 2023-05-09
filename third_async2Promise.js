let {readFile, writeFile} = require('fs').promises;

let start = async()=> {
    try {
        await writeFile('textfiles/text3.txt', 'This is the third textfile');
        await writeFile('textfiles/text4.txt', 'This is the fourth textfile');


        let result1 = await readFile('textfiles/text3.txt', 'utf-8');
        let result2 = await readFile('textfiles/text4.txt', 'utf-8');
        await writeFile('textfiles/text5.txt', `text3.txt: ${result1}, \ntext4.txt: ${result2}`);

    } catch (error) {
        console.log("Error", error);
    }
}

start();