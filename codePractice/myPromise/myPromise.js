/**
 * @description myPromise
 * @author Bo Tian
 */

// 需要构建一个类
// 1.这个类有三个普通属性，状态，值，原因，两个函数数组属性。
// 2. 构造函数：构造函数接收一个函数作为参数，构造函数中包含一个成功处理的函数，还有一个拒绝处理的函数
// 然后构造函数会运行用接收的参数那个函数来运行，内部的两个接收拒绝handler函数。

// 3. 这个类包含一个then方法，then方法可以接收一个到两个参数，也可以没参数。
// 内部按三个不同的状态分别进行操作。

//Promise 本质上就是一个函数返回的对象，promise 是一个构造函数
// Promise 的构造函数接收一个函数为参数，并且传入两个参数：resolve，reject，
// 分别表示异步操作执行成功后的回调函数和异步操作执行失败后的回调函数。

class MyPromise {
    state = 'pending';
    value = undefined;
    reason = undefined;

    //这里装的是函数
    //防止传入的函数有异步，来不及then，所以如果是异步，用‘pending’判断，是pending就给他放入这俩数组中
    resolveCallbacks = [];
    rejectCallbacks = [];

    constructor(fn) {
        // 成功处理，这相当于写了resolve
        const resolveHandler = (value) => {
            // 先改变状态，对value赋值
            if(this.state === 'pending') {
                this.state = 'fulfilled';
                this.value = value;

                // 这里会把数组中的每个函数变成某个参数相应的返回值
                // 这个foreach中的 函数是数组中的函数
                // 如果当前 resolveCallbacks有东西，遍历执行
                this.resolveCallbacks.forEach(resolveFn => resolveFn(this.value));
            }
        }

        // 拒绝，这相当于写了reject
        const rejectHandler = reason => {
            if(this.state === 'pending'){
                // 也是先改变状态
                this.state = 'rejected';
                
                //赋值reason，都搞进reject数组中
                this.reason = reason;
                // rejectFn， 是拒绝数组中的函数
                this.rejectCallbacks.forEach(rejectFn => rejectFn(this.reason));
            }
        }

        // 这里不一样的人写的样子会不一样，所以这里写一个抓错误的try，有错误就catch
        try{
            //模拟promise中，接收resolve和reject作为参数的函数，右前后顺序
            fn(resolveHandler, rejectHandler)
        }catch(err){
            rejectHandler(err)
        }
    }

    then(fn1, fn2){
        fn1 = typeof fn1 === 'function' ? fn1 : v => v;
        fn2 = typeof fn2 === 'function' ? fn2 : e => e;

        if(this.state === 'pending'){
            //构造函数 需要一个函数做参数，这个函数就是
            //(rs,rj) => {...},这个函数接收两个参数，然后有两种可能
            //要么用reject，要么用resolve，如果成功，就往resolve数组里push返回结果
            //这里的resolve和reject其实就是上面两个handler。
            const p1 = new MyPromise((resolve, reject) => {
                this.resolveCallbacks.push(() => {
                    //push 进去还没执行，要等到上面resolve或者reject后再执行
                    //那时value已经是新的value了
                    try{
                        const newValue = fn1(this.value);
                        // 让这个变成fulfilled
                        resolve(newValue);
                    }catch(err){
                        reject(err);
                    }
                });

                //reject 的话，就往另一个数组推入返回值
                this.rejectCallbacks.push(() => {
                    try{
                        const newReason = fn2(this.reason);
                        reject(newReason);
                    }catch(err){
                        reject(err);
                    }
                });
            });
            return p1;

        }

        if(this.state === 'fulfilled') {
            const p1 = new MyPromise((resolve, reject) => {
                try{
                    const newValue = fn1(this.value);
                    resolve(newValue);
                }catch(err){
                    reject(err);
                }
            });
            return p1;
        }

        if (this.state === 'rejected') {
            const p1 = new MyPromise((resolve, reject) => {
                try {
                    const newReason = fn2(this.reason);
                    reject(newReason);
                } catch (err) {
                    reject(err);
                }
            })
            return p1;
        }
    }

    catch(fn) {
        return this.then(null, fn);
    }

}
//上面的 resolve是什么意思， resolve就是这个
MyPromise.resolve = function(value) {
    return new MyPromise((resolve, reject) => resolve(value));
}

MyPromise.reject = function(reason){
    return new MyPromise((resolve, reject) => reject(reason));
}

MyPromise.all = function(promiseList = []) {
    const p1 = new MyPromise((resolve, reject) => {
        const result = [];// 储存promiseList 所有的结果
        const length = promiseList.length;
        let resolveCount = 0;

        promiseList.forEach(p => {
            p.then(data => {
                result.push(data);

                resolveCount ++;
                if(resolveCount === length){
                    resolve(result);
                }
            }).catch(err => reject(err));
        });
    })
    return p1;
}

MyPromise.race = function(promiseList = []){
    let resolved = false
    const p1 = new Promise((resolve, reject) => {
        promiseList.forEach(p => {
            p.then(data => {
                if(!resolved){
                    resolve(data);
                    resolved = true;
                }
            }).catch(err => reject(err));
        });
    });
    return p1;
}
