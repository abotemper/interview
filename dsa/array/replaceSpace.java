//请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
// 输入：s = "We are happy."
// 输出："We%20are%20happy."

class Solution {
  public String replaceSpace(String s) {
    StringBuilder sb = new StringBuilder();
    for (int i = 0; i < s.length(); i++) {
      char ch = s.charAt(i);
      if (ch == ' ') {
        sb.append("%20");
      } else {
        sb.append(ch);
      }
    }
    return sb.toString();
  }
}
