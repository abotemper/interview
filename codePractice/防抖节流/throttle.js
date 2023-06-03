//节流例子， 无论拖拽速度有多快， 都会每隔100MS触发一次
//在规定时间内不会重复触发回调，大于这个时间才会触发，把频繁触发变为少量触发
//懒加载时要监听计算滚动条的位置，但不必每次滑动就出发，可以降低计算的频率，不必去浪费cpu资源
//控制次数是节流
const div1 = document.getElementById('div1');

// let timer = null;
// div1.addEventListener('drag', function(e) {
//   if(timer) {
//     return
//   }
//   timer = setTimeout(() => {
//     console.log(e.offsetX, e.offsetY);

//     timer = null;
//   }, 100);
  
// });


function throttle(fn, delay = 100) {
  let timer = null
  console.log('timer value: ', timer);

  return function () {
    if(timer){
      return
    }
//到这一步就有值了，必须等setTimeout 执行结束，timer赋值为null，if才会再执行
//无论事件如何执行，只能等定时器结束
    timer = setTimeout(() => {
      fn.apply(this, arguments);
      timer = null
    }, delay);
  }
}

div1.addEventListener('drag', throttle(function (e) {
    console.log(e.offsetX, e.offsetY);
}, 200));




function throttle2(fn, delay) {
  let timer = null;

  return function () {
    if(timer) {
      return
    }

    timer = setTimeout(() => {
      fn.apply(this, arguments);
      timer = null;
    }, delay);
  }
}