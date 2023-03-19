/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
  let res = '';
  for(let i = 0 ; i < s.length; i++){
      const ch = s[i];
      if(ch == " ") {
          res += "%20";
      }
      else {
          res += ch;
      }
  }
  return res;
};

