// Functionally exactly the same as oop.js but using ES5 syntax

function Animal(name, dob, owner=null){
    this.name = name;
    this.dob = dob;
    this.owner = owner;

    this.adopt = function(newOwner){ this.owner = newOwner; };

    this.getAdoptionStatus = function(){
        this.owner ? console.log(`${this.name} has been adopted by ${this.owner}!`) : console.log(`${this.name} is still searching for their forever home!`) 
    };
};

// Run `node oop.js` to see output
console.log('\n--------------------------------------------\n')

let zelda = new Animal('Zelda', 180726)

console.log(zelda.name, zelda.dob, zelda.owner);
zelda.getAdoptionStatus();

zelda.adopt('Beth');

zelda.getAdoptionStatus();

console.log('\n--------------------------------------------\n')