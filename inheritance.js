// Parent Animal class
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


// Cat class has access to the Animal functionality and a custom method
class Cat extends Animal {
    speak(){ console.log('Miau!'); }
};


// Dog class has access to the Animal functionality, a custom method and some custom constructor functionality
const dogBreeds = ['shih-poo', 'labrador', 'greyhound'];

class Dog extends Animal {
    constructor(breedIdx, name, dob, owner){
        super(name, dob, owner);
        this.breed = dogBreeds[breedIdx];
    };

    speak(){ console.log('Woof!'); }
};



// Run `node inheritance.js` to see output
console.log('\n--------------------------------------------\n')

let zelda = new Cat('Zelda', 180726)
console.log(zelda.name, zelda.dob, zelda.breed);
zelda.adoptionStatus;
zelda.adopt('Beth');
zelda.speak()
zelda.adoptionStatus;

console.log('\n--------------------------------------------\n')

let mochi = new Dog(0, 'Mochi', 180726)
console.log(mochi.name, mochi.dob, mochi.owner, mochi.breed);
mochi.adoptionStatus;
mochi.adopt('Naz');
mochi.speak()
mochi.adoptionStatus;

console.log('\n--------------------------------------------\n')