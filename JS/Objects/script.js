let Rene = {
    name: "Rene",
    age: 21
}

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    printName = function(){
        return `My name is ${this.firstName} ${this.lastName}, I am ${this.age} years old.`
    }
}

let Jake  = new Person('Jake', 'Wilson', 34)

console.log(Jake.printName())

