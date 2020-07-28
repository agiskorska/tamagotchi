// --------------------------------------------------------------------
// --------------------------------------------------------------------
// Animal setup
// --------------------------------------------------------------------
function Animal(name, dob, owner=null) {
    this.name = name;
    this.dob = dob;
    this.owner = owner;
};

Animal.prototype.speak = function(){ console.log(`${this.name} says hello!`) }

Animal.prototype.adopt = function(newOwner){ this.owner = newOwner; };

// defining a getter property
Object.defineProperty(Animal.prototype, 'adoptionStatus', {
    get() { return this.owner ? `${this.name} has been adopted by ${this.owner}!` : `${this.name} is still searching for their forever home!` }
})


// --------------------------------------------------------------------
// --------------------------------------------------------------------
// Cat class has access to the Animal functionality
// --------------------------------------------------------------------
function Cat(name, dob, owner) {
    Animal.call(this, name, dob, owner); // What do you lose access to without this line?
};

Object.setPrototypeOf(Cat.prototype, Animal.prototype); // What do you lose access to without this line?


// --------------------------------------------------------------------
// --------------------------------------------------------------------
// Dog class has access to the Animal functionality, a custom method 
// and some custom constructor functionality
// --------------------------------------------------------------------
const dogBreeds = ['shih-poo', 'labrador', 'greyhound'];

function Dog(breedIdx, name, dob, owner) {
    Animal.call(this, name, dob, owner); 
    this.breed = dogBreeds[breedIdx];
};

Dog.prototype.speak = function(){ console.log(`${this.name} says Woof!`); }
Object.setPrototypeOf(Dog.prototype, Animal.prototype);


// --------------------------------------------------------------------
// --------------------------------------------------------------------
// Run `node inheritance.js` to see output
// --------------------------------------------------------------------
console.log('\n--------------------------------------------\n')

let zelda = new Cat('Zelda', 180726)
console.log(zelda.name, zelda.dob);
console.log(zelda.adoptionStatus);
zelda.adopt('Beth');
zelda.speak()
console.log(zelda.adoptionStatus);

console.log('Is Zelda an Animal?', (zelda instanceof Animal) );
console.log('Is Zelda a Cat?', (zelda instanceof Cat) );
console.log('Is Zelda a Dog?', (zelda instanceof Dog) );

console.log('\n--------------------------------------------\n')

let mochi = new Dog(0, 'Mochi', 200401)
console.log(mochi.name, mochi.dob, mochi.breed);
console.log(mochi.adoptionStatus);;
mochi.adopt('Naz');
mochi.speak(); // Which will be used? Animal.prototype.speak or Dog.prototype.speak?
console.log(mochi.adoptionStatus);

console.log('Is Mochi an Animal?', (mochi instanceof Animal) );
console.log('Is Mochi a Cat?', (mochi instanceof Cat) );
console.log('Is Mochi a Dog?', (mochi instanceof Dog) );

console.log('\n--------------------------------------------\n')