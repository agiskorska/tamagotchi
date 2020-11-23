// --------------------------------------------------------------------
// --------------------------------------------------------------------
// Animal setup
// --------------------------------------------------------------------
class Animal{
    constructor(name, dob, owner=null){
        this.name = name;
        this.dob = dob;
        this.owner = owner;
    };

    speak(){ console.log(`${this.name} says hello!`); };
    
    adopt(newOwner){ this.owner = newOwner; };

    get adoptionStatus(){
        return this.owner ? `${this.name} has been adopted by ${this.owner}!` : `${this.name} is still searching for their forever home!` 
    };
};


// --------------------------------------------------------------------
// --------------------------------------------------------------------
// Cat class has access to the Animal functionality
// --------------------------------------------------------------------
class Cat extends Animal {};


// --------------------------------------------------------------------
// --------------------------------------------------------------------
// Dog class has access to the Animal functionality, a custom method 
// and some custom constructor functionality
// --------------------------------------------------------------------
const dogBreeds = ['shih-poo', 'labrador', 'greyhound'];

class Dog extends Animal {
    constructor(breedIdx, name, dob, owner){
        super(name, dob, owner);
        this.breed = dogBreeds[breedIdx];
    };

    speak(){ console.log('Woof!'); };
};



// Run `node inheritance.js` to see output
console.log('\n--------------------------------------------\n');

let zelda = new Cat('Zelda', 180726);
console.log(zelda.name, zelda.dob);
console.log(zelda.adoptionStatus);
zelda.adopt('Beth');
zelda.speak();
console.log(zelda.adoptionStatus);

console.log('Is Zelda an Animal?', (zelda instanceof Animal) );
console.log('Is Zelda a Cat?', (zelda instanceof Cat) );
console.log('Is Zelda a Dog?', (zelda instanceof Dog) );

console.log('\n--------------------------------------------\n');

let mochi = new Dog(0, 'Mochi', 200401);
console.log(mochi.name, mochi.dob, mochi.breed);
console.log(mochi.adoptionStatus);
mochi.adopt('Naz');
mochi.speak();
console.log(mochi.adoptionStatus);

console.log('Is Mochi an Animal?', (mochi instanceof Animal) );
console.log('Is Mochi a Cat?', (mochi instanceof Cat) );
console.log('Is Mochi a Dog?', (mochi instanceof Dog) );

console.log('\n--------------------------------------------\n');