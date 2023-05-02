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
    //obj 是 null， 或者不是对象和数组， 直接返回
    return obj
   }

   //初始化返回结果
   let result ;
   if(obj instanceof Array){
    result = [];
   }else {
    result = {};
   }

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