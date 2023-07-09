let strings1 = [ "tabcc", "ababcc", "bbabcc", "aabbabcc"];
let strings2 = ["aac", "bbc", "cc"];
let strings3 = ["aa", "bb", "cc"];
let strings4 = ["aac", "bbc", "c"];


function solve(input) {
  input.sort((a, b) => {return b.length - a.length});
  let myInput = [];
  input.forEach((a) => {
    myInput.push(a.substring(a.length - input[input.length - 1].length, a.length))
  });
  console.log(myInput);
  let i = myInput.length - 2;
  let lastWord = myInput[myInput.length - 1]
  let j = myInput[0].length - 1;
  let result = "";
  let resultArray = []

  for(j; j >= 0; j--) {    
    for(i; i > 0; i-- ){
      if(myInput[i][j] !== lastWord[j]){
        break;
      }
    }
    if(myInput[i][j] === lastWord[j]){
      resultArray.push(lastWord[j]);
    }
    
  }
  while(resultArray.length > 0){
    result += resultArray.pop();
  }

  if(result.length === 0){
    return "@Zero"
  } else {
    return result;
  }

}
console.log(solve(strings1));
console.log(solve(strings2));
console.log(solve(strings3));
console.log(solve(strings4));

