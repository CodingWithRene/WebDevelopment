//strings

let name = 'Rene vanderWatt';

//length
console.log(name.length);

//special charecters
console.log('Single quote: \' ');
console.log('Double quote: \" ');
console.log('Backslash: \\ ');
console.log('New Line: New \nLine');
console.log('Tabbed \t\t over');

//index
console.log(name[2]);
console.log(name.charAt(3));
console.log(name.indexOf('R'));
console.log(name.lastIndexOf('r'));

//sub string
console.log(name.substring(1,6));
console.log(name.substr(2));

//replace
console.log(name.replace('e', 'dog'));

//change case
console.log(name.toUpperCase())
console.log(name.toLowerCase())

//concatination
console.log(name + ' Is cool.');
console.log(name.concat(' is awesome.'));

//trim
let toTrim = '      White space?        ';
console.log(toTrim.trim());

//split
let toSplit = 'Jake, bill, and the, dog';
console.log(toSplit);
console.log(toSplit.split(','));
console.log(toSplit.split(' '));




