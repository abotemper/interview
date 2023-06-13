// 查找插入都是O（1）

class HashTable {
  constructor(size = 7) {
    //上来就构造一个有七个元素的数组
    //数组的索引由_hash解决
    this.dataMap = new Array(size);
  }
  //下划线表示 ， 开发者看到后应该要了解 这个方法最好只能在内部使用，而不该在实例中使用
  //key表示放进去的对象的key，一般是字符串
  _hash(key) {
    let hash = 0;
    //遍历这个字符串，取余数运算使得最后结果在0-7中变动
    //比如传入“hello”，就遍历五次算出一个最终hash值
    for (let i = 0; i < key.length; i++) {
      //23是个质数，这个质数因子会让这个数值更加随机
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length
    }
    return hash;
  }

  set(key, value){
    let index = this._hash(key);
    // 如果七个位置中的对应地方是空的，那么得把该位置初始化成一个[]
    if(!this.dataMap[index]) this.dataMap[index] = [];

    //如果空，在初始化之后将一个[]psuh入七个位置中对应的位置
    this.dataMap[index].push([key, value]);
    return this;
  }

  get(key) {
    let index = this._hash(key);
    //该7个位置中的对应位置有值的话，遍历该位置的[]，其中的[]的索引对应的话返回后面的值
    if (this.dataMap[index]) {
      for (let i = 0; i< this.dataMap[index].length; i++) {
        if (this.dataMap[index][i][0] === key) {
          return this.dataMap[index][i][1]
        }
      }
    }

    return undefined;
  }

  //取到所有key
  key() {
    let allKeys = [];
    //遍历七个位置
    for (let i = 0; i < this.dataMap.length; i++) {
      //如果该位置有值，就对该位置遍历。
      if (this.dataMap[i]) {
        //找到该位置所有的key，
        for (let j = 0; j < this.dataMap[i].length; j++) {
          allKeys.push(this.dataMap[i][j][0]);
        }
      }
    }

    return allKeys;
  }
}

//比较垃圾的两个数组找相同item的算法：
function itemInCommon(arr1, arr2) {
  for(let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) return true; 
    }
  }
  return false;
}

//提升复杂度到On的方法：
function itemInCommon2 (arr1, arr2) {
  let obj = {};
  for (let i = 0; i < arr1.length; i++) {
    obj[arr1[i]] = true;
  }

  //遍历第二个数组，如果有这个数组中的内容则返回true
  for (let j = 0; j < arr2.length; j++) {
    //不用遍历对象，有key就直接能找到
    if (obj[arr2[j]]) return true;
  }
  return false;
}

// [1, 2, 3] ; [5, 4, 3]

let obj = {
  1: true,
  2: true,
  3: true
}