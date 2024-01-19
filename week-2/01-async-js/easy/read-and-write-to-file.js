const fs = require('fs');

function readLocalFile(fileName) {
    return new Promise(function(resolve) {
        fs.readFile(fileName, "utf-8", (err, data) => {
            resolve(data);
        });
    })
}

function writeToLocalFile(fileName, text) {
    new Promise(function(resolve) {
        fs.writeFile(fileName, text, (err) => {
            if(err) console.log(err);
            else {
                console.log(fs.readFileSync(fileName, "utf-8"));
            }
        });
    })
}

async function main() {
    let data = await readLocalFile("file.txt");
    console.log(data);
    await writeToLocalFile("new-file.txt", "GTA6");
}

main();