// Functionally exactly the same as oop.js but using ES6 class syntax as 'syntactic sugar'

class Animal{
    // Animal constructor
    constructor(name, dob, owner=null){
        this.name = name;
        this.dob = dob;
        this.owner = owner;
    }

    // Animal prototype methods
    speak(){ console.log(`${this.name} says hello!`); }
    
    adopt(newOwner){ this.owner = newOwner; };

    get adoptionStatus(){
        return this.owner ? `${this.name} has been adopted by ${this.owner}!` : `${this.name} is still searching for their forever home!` 
    };
};




// Run `node es6_class_syntax_oop.js` to see output
console.log('\n--------------------------------------------\n')

let zelda = new Animal('Zelda', 180726)
let mochi = new Animal('Mochi', 200401)

console.log(zelda.name, zelda.dob);
zelda.speak();

console.log(zelda.adoptionStatus);

zelda.adopt('Beth');

console.log(zelda.adoptionStatus);
console.log(mochi.adoptionStatus);

console.log("Is Zelda an Animal?", (zelda instanceof Animal)) // Does JS know that Zelda is an animal?

console.log('\n--------------------------------------------\n')