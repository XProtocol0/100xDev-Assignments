let count = 0;
function counterOne() {

    setInterval(() => {
        count++;
        console.log(count);
    }, 1000);
}

function asyncCountIncrement() {
    return new Promise(function(resolve) {
        setTimeout(() => {
            resolve(count++)
        }, 1000);
    });
}

async function counterTwo() {
    for(let i=0; i<Number.POSITIVE_INFINITY; i++) {
        let value = await asyncCountIncrement();
        console.log(value);
    }
}