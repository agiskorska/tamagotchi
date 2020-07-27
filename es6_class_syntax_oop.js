// Functionally exactly the same as oop.js but using ES6 class syntax as 'syntactic sugar'

class Animal{
    constructor(name, dob, owner=null){
        this.name = name;
        this.dob = dob;
        this.owner = owner;
    }
    
    adopt(newOwner){ this.owner = newOwner; };

    get adoptionStatus(){
        this.owner ? console.log(`${this.name} has been adopted by ${this.owner}!`) : console.log(`${this.name} is still searching for their forever home!`) 
    };
};

// Run `node es6_class_syntax_oop.js` to see output
console.log('\n--------------------------------------------\n')

let zelda = new Animal('Zelda', 180726)

console.log(zelda.name, zelda.dob, zelda.owner);
zelda.adoptionStatus;

zelda.adopt('Beth');

zelda.adoptionStatus;

console.log('\n--------------------------------------------\n')