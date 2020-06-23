let equals = 1 === 1;
console.log(equals)
let greatThan = 5 > 1;

let LessThan = 2 < 10;

let greaterThanEq = 5 >= 5;

let lessThanEQ = 4 <= 9;

let noteEquals = 5 !== 2;

let storeA = 4.40;
let storeB= 4.40;

function compareStorePrices (storeA, storeB){
    let storeAisLower = storeA < storeB;
    console.log(storeAisLower);


    if (storeAisLower) {
        console.log("Store A has a lower price.")
    } else if (storeB < storeA) {
        console.log("Store B has a lower price")
    } else {
        console.log("Their prices are equal.")
    }
}

compareStorePrices(10, 5);
compareStorePrices ( 7,10);

function squareNum (number) {
    let squared = number * number;
    let subed = number - 19;
    return squared;
}

let squarednumber = squareNum(4);
console.log(squarednumber);

let x = 10;

function add numbers(n, m) {
    let b;
    if(1===1){
        b = 8;
    }
    return n + m;
}

addnumbers(1, 2, 10);


let ourArray = [1, 2, 3, 4, 5, 6, 7 ["a", "b", "c"]];
let newArr= ourArray[4];
console.log(ourArray[4][0]);

let arrLen = ourArray.length;
for(let i = 0; i<ourArray.length; i++)
for(let i =0; I<arrlen, i++){
    console.log("i is equal to:" +i)
    console.log(ourArray[i]);
    for (let i = 0; j<10; j++){
        console.log ('j is equal to:' '+j')
    }
}

while (x < 10){
    console.log('Ran');
    x = x + 1;
}