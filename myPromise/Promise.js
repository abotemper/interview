console.log('first step');

let promise = new Promise((resolve, reject) => {
    console.log('second step');
    setTimeout(() => {
        resolve('this time ok');
        console.log('fourth step');

    } );
});

promise.then(
    result => {console.log(result)},
    result => {console.log(result.message)}
);

console.log('third step');
