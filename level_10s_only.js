// -------------------------------------------------
// Run `node level_10s_only.js` to access the vault!
// -------------------------------------------------
// -------------------------------------------------

// Using the built in readline module to get user input. prompt-sync can give a cleaner experience.
const ui = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


// Defining a custom Error by extending the built in Error object
class SHIELDError extends Error {
    constructor(msg){
        super(`AUTHORITIES HAVE BEEN ALERTED! ${msg}!`);
        this.name = 'SHIELDError';
    };
};


// Top Secret Vault App!
const level10s = [{name: "Fury", faveColour: "red"}, {name: "Pierce", faveColour: "blue"}]

ui.question('Welcome to the Top Secret Info Vault. What is your last name?\n', input => {
    try {
        let user = level10s.find(u => u.name.toLowerCase() === input.toLowerCase())
        if(user){
            nextQuestion(user)
        } else {
            throw new Error(`Hey, you can't be here!`)
        } 
    } catch (err) {
        console.log(err.message); // Experiment with err, err.name, err.message, err.stack
        ui.close();
    };
})

function nextQuestion(user){
    console.log(`Welcome back, ${user.name}`);
    ui.question('What is your favourite colour?\n', input => {
        try {
            if(input === user.faveColour){
                console.log('Excellent, you may proceed...')
                showTopSecretInfo();
            } else {
                throw new SHIELDError(`${user.name}'s favourite colour would never be ${input}! Get outta here!`)
            } 
        } catch (err) {
            console.log(err.message); // Experiment with err, err.name, err.message, err.stack
            ui.close();
        };
    })
};

function showTopSecretInfo(){
    console.log("Visit https://marvelcinematicuniverse.fandom.com/wiki/Marvel_Cinematic_Universe_Wiki for the Top Secret Info");
    ui.close();
};