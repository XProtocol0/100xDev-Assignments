const fs = require('fs');

function readFromFile(fileName) {
    return new Promise(function(resolve) {
        fs.readFile(fileName, "utf-8", (err, data) => {
            resolve(data);
        });
    })
}

function writeToFile(fileName, text) {
    return new Promise(function(resolve) {
        fs.writeFile(fileName, text, (err) => {
            if(err) console.log(err);
        });
    })
}

async function main() {
    let data = await readFromFile("file.txt");
    console.log(data);
    data = data.replace(/\s+/g, ' ');
    await writeToFile("file.txt", data);
}
main();