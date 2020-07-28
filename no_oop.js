// Objects, but not OOP!
const zelda = {
    name: "Zelda",
    dob: 180726,
    owner: null,
    getAdoptionStatus: function(){ this.owner ? console.log(`${this.name} has been adopted by ${this.owner}!`) : console.log(`${this.name} is still searching for their forever home!`) },
    adopt: function(newOwner){ this.owner = newOwner }
};

const mochi = {
    name: "Mochi",
    dob: 200401,
    owner: null,
    getAdoptionStatus: () => { this.owner ? console.log(`${this.name} has been adopted by ${this.owner}!`) : console.log(`${this.name} is still searching for their forever home!`) },
    adopt: newOwner => this.owner = newOwner
};

console.log('\n--------------------------------------------\n')

console.log(zelda.name, zelda.dob, zelda.owner);
zelda.getAdoptionStatus();
zelda.adopt("Beth");
zelda.getAdoptionStatus();
// console.log(zelda instanceof Animal) // It would be great if this returned true!

console.log('\n--------------------------------------------\n')
// Why do we have undefineds in these results?
console.log(mochi.name, mochi.dob, mochi.owner);
mochi.getAdoptionStatus();
mochi.adopt("Beth");
mochi.getAdoptionStatus();

console.log('\n--------------------------------------------\n')