let input = "quacqkuack";

let compare = "quack".split("");

console.log(input.split(""));

inputArray = input.split("");

let c = 0;
let i = 0;
let j = 0;
let count = 0;
let gooses = new Map();
console.log(gooses.size);

function findFirstFinished() {
    if (gooses.size === 0) {
        gooses.set([1, false]);
        return;
    } else {
        for(let n = 0; n < gooses.size; n++) {
           if (gooses[n] === true){
              gooses.set([n, false]);
              return;
           } 
         }  
        return;
    }  
}

function findFirstUnfinished() {
    for(let n = 0; n < gooses.size; n++) {
        if(gooses[n] === false) {
            gooses.set([n, true]);
            return;
        }
    }
    gooses.set([gooses.size + 1, true]);
    return;
}

while(1) {
    if(compare[c] === inputArray[i]) {
        count++;
        c++;
        i++;
        findFirstFinished();
        if(count === 5) {
          c = 0;
          i = j;
          count = 0;
          findFirstUnfinished();    
        }
        j = i;
    } else {
        i++;
    }

    if(i === inputArray.length){
        break;
    }

}



console.log(gooses.size);