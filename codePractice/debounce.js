//防抖例子，例如输入账号时每次输入密码，都会回调一个验证函数，
//但是如果每次按键盘都会触发的话影响性能
//所以就有了防抖，如果连续输入就没事，如果停止输入一段时间才会触发回调函数

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