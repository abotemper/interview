/**
 * 深拷贝
 */

const obj = {
  age: 20,
  name: 'xxx',
  address: {
    city : 'beijing'
  },
  arr: ['a', 'b', 'c']
}

const obj2 = obj1;

/**
 * 深拷贝
 */


function deepClone(obj = {}) {
   if (typeof obj !== 'object' || obj == null) {
    //如果不是object，是object且不是null（null是object），比如number，string
    //都会返回本身，这就相当于直接造了一个一模一样的string或者number，
    //无所谓什么deep不deep了。在递归时，到最深处总会到这里，到时那一项会被复制。
    return obj
   }

   //因为数组也是一种object，所有查看是否是数组，是数组就变成数组。
   //造一个变量，用于储存新的东西。
   let result ;
   if(obj instanceof Array){
    result = [];
   }else {
    result = {};
   }

   //遍历，只要不是原型属性，我们就让它继续deepClone，直到string或者number这些
   for (let key in obj) {
    //保证key 不是原型的属性
    if (obj.hasOwnProperty(key)) {
      // 递归
      result[key] = deepClone(obj[key]);
    }
   }
   //返回结果
  return result ;
}

function deepClone2 (item) {
  if (typeof(item) !== 'object' || item == null){
    return item;
  }

  let result;
  if (item instanceof Array) {
    result = [];
  }else {
    result = {};
  }

  for (let key in item){
      if (key.hasOwnProperty) {
        result[key] = deepClone2(item[key]);
      }
  }
  return result;



}