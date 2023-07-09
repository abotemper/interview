function factorial(n) {
  if(n === 1) return 1;
  return n * factorial(n-1);
}

// factorial(4)
// 先把return 4 * factorial(3);放入栈中，执行不了
// 再把return 3 * factorial(2);放入栈中，执行不了
// 再把return 2 * factorial(1);放入栈中，执行不了
// 再把return 1;放入栈中，可以执行，结果进入下面，下面又能执行了
//然后依次执行