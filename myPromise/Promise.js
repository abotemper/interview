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
const arr = [1,[2,[3,[4,5]]],6]
//  方法一：数组自带的扁平化方法,flat的参数代表的是需要展开几层，如果是Infinity的话，就是不管嵌套几层，全部都展开
console.log(arr.flat(Infinity))

