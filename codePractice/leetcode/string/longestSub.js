//使用map来储存当前已经遍历过的字符， key为字符，value 为下标
//使用i来标记无重复子串开始的下标，j为当前遍历字符的下标
//遍历字符串， 判断当前字符是否已经在map中存在，存在则更新无重复子串开始的下标
//i为相同字符的下一位置， 此时从i到j为最新的无重复子串，更新max，将当前字符与
//下标放入map中，最后，返回max即可。

function lengthOfLongestSubstring(s) {
  //哈希集合，记录每个字符是否出现过
  const occ = new Set();
  const n = s.length;
  //右指针，初始值为-1，相当于我们在字符串的左边界的左侧，还没有开始移动
  let rk = -1, ans = 0;
  for(let i = 0; i < n; ++i) {
    if(i != 0){
      //左指针向右移动一格， 移除一个字符
      occ.delete(s.charAt(i - 1));
    }
    while(rk + 1 < n && !occ.has(charAt(rk + 1))){
      //不断移动右指针
      occ.add(s.charAt(rk + 1));
      ++rk;
    }
    //第 i 到 rk 个字符是一个无重复的子串
    ans = Math.max(ans, rk - i + 1);
  }
  return ans;
}

