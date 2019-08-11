//conditionals - comparison

//comparison operators (==, !=, ===, >, <, >=, <=)

let comparison = 5 < 4;
let alwaysTrue = true;
let alwaysFalse = false;

console.log(comparison);

if(true){
    console.log('Will always run')
}

if(alwaysTrue == true){
    console.log('Will always run')
}

if(alwaysTrue){
    console.log('Will always run')
}

if(alwaysFalse == true){
    console.log('Will never run')
}

if(alwaysFalse){
    console.log('Will never run')
}

if(alwaysFalse != true){
    console.log('testing false boolean');
}


// if comparison
let age = -1;

if(age == 21){
    console.log('You are 21')
}

if(age === 21){
    console.log('You are 21!')
}

if(age > 21){
    console.log('you are older than 21')
}

if(age < 21){
    console.log('you are younger than 21')
}

if(age >= 100){
    console.log('you are old.... yay');
}

if(age <= 0){
    console.log('You have not been born yet')
}

//if else

let number = 21;

if(number == 10){
    console.log('Number was 10')
} else{
    console.log('Number was not 10')
} 

// else if

if(number == 20){
    console.log('Number is 20');
} else if(number > 20){
    console.log('Number is  greater than 20')
} else {
    console.log("number is less than 20")
}





