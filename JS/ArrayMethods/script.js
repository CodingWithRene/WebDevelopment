//Arrays 

let info = [12, 43, 88, 90, 33];

//ouput - toString, join
console.log(info[0]);
console.log(info);
console.log(info.toString());
console.log(info.join());

//pop
console.log(info.pop());
console.log(info.toString());

//push
console.log(info.push(111));
console.log(info.toString());

//shift
console.log(info.shift());
console.log(info.toString());

//unshift
console.log(info.unshift(999));
console.log(info.toString());

//delete
delete info[1];
console.log(info.toString());
console.log(info);

//splice
console.log(info.splice(0,2,222,333,444));
console.log(info.toString());

//concat
let moreNums = [88,42];
console.log(info.concat(moreNums));

//slice
console.log(info.slice(3,9));

