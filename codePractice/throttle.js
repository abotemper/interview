//节流例子， 无论拖拽速度有多快， 都会每隔100MS触发一次

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

  return function () {
    if(timer){
      return
    }

    timer = setTimeout(() => {
      fn.apply(this, arguments);
      timer = null
    }, delay);
  }
}

div1.addEventListener('drag', throttle(function (e) {
    console.log(e.offsetX, e.offsetY);
}, 200));