//判断是否是对象或者是数组，返回true或者false，用于if判断，省的反复写一堆一样的
function isObject(obj) {
  return typeof obj === 'object' && obj !==null;
}

//全相等（深度）
function isEqual(obj1, obj2) {
  //如果都不是object就直接让相等，比如string，number
  if(!isObject(obj1) || !isObject(obj2)) {
    //值类型，参与equal的一半不会是函数
    //如果他们不是对象， 那么直接返回二者是否相等的 boolean
    return obj1 === obj2;
  }
//这一步有没有没关系
  if(obj1 === obj2) {
    return true;
  }

  //两个都是对象或者是数组，而且不相等
  //1.先取出 obj1 和 obj2 的 keys， 比较个数，长短不一肯定不行
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);
  if(obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  //2.以obj1 为基准 和 obj2 依次递归比较
  for(let key in obj1) {
    //比较当前key的val-递归
    //如果是string会走上面的程序，如果不是往下走比长短，如果是object继续下面方式
    const res = isEqual(obj1[key], obj2[key]);//返回true or false
    //最后全false就false                          
    if(!res) {
      return  false;
    }
  }
  //全相等
  return  true;
}

const obj1 = {
    a: 100,
    b: {
        x: 100,
        y: 200
    }
}
const obj2 = {
    a: 100,
    b: {
        x: 100,
        y: 200
    }
}

obj3 = 20;
obj4 = 20;

obj5 = [1, 2, 3];
obj6 = [1, 2, 3];
console.log( obj1 === obj2 )
console.log( isEqual(obj1, obj2) );
console.log( isEqual(obj3, obj4) );
console.log( isEqual(obj5, obj6) );
