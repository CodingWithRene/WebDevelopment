//more conditionals

//logical operators (&&, ||, !)

let isRaining = true;
let dayOfWeek = 'Tue';

//  not operator - !
if(isRaining){
    console.log('It is raining, bring an umbrella');
} else if(!isRaining){
    console.log('No need to bring umbrella');
} 

// and operator - &&
if(isRaining && dayOfWeek=='Mon'){
    console.log('It is raining on a monday');
} else if(!isRaining && dayOfWeek=='Mon'){
    console.log('What a clear monday!')
}

if(isRaining && dayOfWeek=='Tue'){
    console.log('It is raining on a tuesday');
} else if(!isRaining && dayOfWeek=='Tue'){
    console.log('What a clear tuesday!')
}

// or operator - ||

let number = 10;
if(number == 10 || number > 10){
    console.log('NUmber is equal to, or greater than 10');
}

