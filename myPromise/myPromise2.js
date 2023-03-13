class MyPromise2{
    //先建立好promise的三个状态属性
    static PENDING = 'pending';
    static FULFILLED = 'fulfilled';
    static REJECT = 'reject';
    constructor(func) {
        //状态默认pending
        this.status = MyPromise2.PENDING;
        this.result = null;
        try{
            func(this.resolve.bind(this), this.reject.bind(this));

        }catch(err){
            this.reject(err)

        }
        func(this.resolve.bind(this), this.reject.bind(this));


    }
    resolve(result){
        if(this.status === MyPromise2.PENDING){
            this.status = MyPromise2.FULFILLED;
            this.result = result;
        }
    }
    reject(result){
        if(this.status === MyPromise2.PENDING){
            this.status = MyPromise2.REJECT;
            this.result = result;
        }
    }

    then(onFulfilled, onReject) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : () => {};
        onReject = typeof onReject === 'function' ? onReject : () => {};
        if(this.status === MyPromise2.FULFILLED){
            setTimeout(() => {
                onFulfilled(this.result);
            });
        }

        if(this.status === MyPromise2.REJECT){
            setTimeout(() => {
                onReject(this.result);
            });
        }


    }
}
