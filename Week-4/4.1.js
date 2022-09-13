let okay = new Promise((resolve, reject) => {
    let getNumber;
    getNumber = Math.floor(Math.random() * 25) + 5;
    console.log(getNumber);
    if (getNumber % 5 === 0) {
        resolve("Correct number generated")
    }
    else {
        reject("Incorrect number generated")
    }
})


Promise.allSettled([okay]);
okay.then((message) => {
    console.log('Then.' + " " + message)
}).catch((message) => {
    console.log('Catch.' + " " + message)
})