'use strict';
let arr = [];
for (let i = 0; i <5 ; i++) {
    let input = prompt('please add numbers')
arr.push(input);
}

alert('the max number is ' + Math.max(...arr));
alert('the min number is ' + Math.min(...arr));