const input1 = document.getElementById('input1');
// let timer = null;

// input1.addEventListener('keyup', function(){
//   if (timer) {
//     clearTimeout(timer);
//   }
//   timer = setTimeout(() => {
//     console.log(input1.value); // 模拟触发 change事件
//       //清空定时器
//   timer = null;
//   }, 500 );

// });

function debounce(fn, delay = 500) {
  let timer = null;

  return function() {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments);
      timer = null;
    }, delay);
  }
}

input1.addEventListener('keyup', debounce(function () {
  console.log(input1.value);
}),600);