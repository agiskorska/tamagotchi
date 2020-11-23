const zelda = {
    name: "Zelda",
    dob: 180726,
    owner: null,
};

const mochi = {
    name: "Mochi",
    dob: 200401,
    owner: null
};

const tigerlily = {
    name: "Tigerlily",
    dob: 140705,
    owner: null
};

// // Try switching out these arrow functions - what happens? Oh dear!
// const getAdoptionStatus = () => this.owner ? console.log(`${this.name} has been adopted by ${this.owner}!`) : console.log(`${this.name} is still searching for their forever home!`);
// const adopt = newOwner => this.owner = newOwner;

function getAdoptionStatus(){
    this.owner ? console.log(`${this.name} has been adopted by ${this.owner}!`) : console.log(`${this.name} is still searching for their forever home!`);
};

function adopt(newOwner){
    this.owner = newOwner;
};

console.log('\n--------------------------------------------');
console.log('--------------------------------------------');
console.log('------------------CALL----------------------');
console.log('--------------------------------------------\n');

console.log(zelda.name, zelda.dob, zelda.owner);
getAdoptionStatus.call(zelda);
adopt.call(zelda, "Beth"); // When using call, arguments are passed in separately
getAdoptionStatus.call(zelda);




console.log('\n--------------------------------------------');
console.log('--------------------------------------------');
console.log('------------------APPLY---------------------');
console.log('--------------------------------------------\n');

console.log(mochi.name, mochi.dob, mochi.owner);
getAdoptionStatus.apply(mochi);
adopt.apply(mochi, ["Naz"]); // When using apply, arguments are passed in an array
getAdoptionStatus.apply(mochi);




console.log('\n--------------------------------------------');
console.log('--------------------------------------------');
console.log('------------------BIND----------------------');
console.log('--------------------------------------------\n');

console.log(tigerlily.name, tigerlily.dob, tigerlily.owner);
const getTLsAdoptionStatus = getAdoptionStatus.bind(tigerlily); // .bind returns a new function but does not invoke it
const adoptTL = adopt.bind(tigerlily);

getTLsAdoptionStatus(); // invoking our new function (created on line 47)
adoptTL('Christine'); // invoking our second new function (created on line 48)
getTLsAdoptionStatus(); // invoking our new function again (created on line 47)

console.log('\n--------------------------------------------\n');