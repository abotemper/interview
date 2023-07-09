let input1 = 'quackquack';
let input2 = 'quaaaaccac';
let input3 = 'quacqkuack';
let input4 = 'quacqkuaaa';

function solve(input){
    let myInput = input.split('');
    myInput = myInput.reverse();
    let quack = ['q','u','a','c','k'];
    let quackBool = [0, 0, 0, 0, 0];

    while(myInput.length > 0) {
        let boolOtherLetter = quack.some((item) => {
            return item !== myInput[myInput.length - 1];
        });
        if(boolOtherLetter){
            console.log(-1);
            return;
        } else {
            let boolQ = true;
            for(let i = 0; i < quackBool.length - 1; i++){
                if(quackBool[i] >= quackBool[i + 1]){
                    boolQ = boolQ && true;
                } else {
                    boolQ = boolQ && false;
                }
            }

            if(boolQ){
                if('q' === myInput[myInput.length - 1]){
                    quackBool[0] += 1;
                }else if('u' === myInput[myInput.length - 1]){
                    quackBool[1] += 1;
                }else if('a' === myInput[myInput.length - 1]){
                    quackBool[2] += 1;
                }else if('c' === myInput[myInput.length - 1]){
                    quackBool[3] += 1;
                }else if('k' === myInput[myInput.length - 1]){
                    quackBool[4 ] += 1;
                }
                myInput.pop();
            } else {
                console.log(-1);
                return;
            }


        }
    };
    console.log(quackBool);
}

solve(input1);
