let input = [[10,10],[10, 9],[3,8],[2,7],[2,6],[1,7],[1,6],[5,5],[4,3],[4,2],[4,1]];

function mySort(input) {
    let myInput2 = [...input].sort((a, b) => {return b[0] - a[0]})
    return myInput2;
}

function filter(input) {
  for(let i = 0; i < input.length; i++){
    for(let j = i + 1; j < input.length; j++) {
      if(input[i][0] === input[j][0]){
        input.splice(j, 1);
      }
      if(input[i][1] === input[j][1]){
        input.splice(j, 1);
      }
    }
  }
  return input;
}



function solve(input){
    let myInput = mySort(input);
    let mySet = [];
    let counts = [];
    let count = 0;

    
    for(let i = 0; i < myInput.length; i++) {
        for(let j = i; j < myInput.length; j++){
            if(myInput[i][1] > myInput[j][1]){
                count++;
            }
        }
        counts.push(count);
        count = 0;
    }

    let i = 0;
    // let temp = -1;
    while(true){
        if(counts.length === 0) {
            break;
        }
        if(counts[i] === Math.max(...counts)){
            mySet.push(...myInput.splice(i, 1));
            if(i !== 0) {
              myInput.splice(0, i);
            }
      
            counts.splice(i, 1);
            if(i !== 0) {
              counts.splice(0, i);
            }
            i = 0;
        } else {
            i++;
        }
    }
    let temp = [...mySet];
    let result = filter(temp);


    return result;
}
let rresult = solve(input);
console.log(rresult);
console.log(rresult.length);