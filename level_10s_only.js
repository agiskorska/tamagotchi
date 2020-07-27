// Using the built in readline module to get user input. prompt-sync can give a cleaner experience.
const ui = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


// Defining a custom Error by extending the built in Error object
class LOLError extends Error {
    constructor(msg){
        super(`LOOOOL! ${msg}!`);
        this.name = 'LOLError';
    };
};


// Top Secret Vault App!
const level10s = ["Fury", "Pierce"]

ui.question('Welcome to the Top Secret Info Vault. What is your last name?\n', input => {
    try {
        if(level10s.includes(input)){
            nextQuestion(input)
        } else {
            throw new Error(`Hey, you can't be here!`)
        } 
    } catch (err) {
        console.log(err.message); // Experiment with err, err.name, err.message, err.stack
        ui.close();
    };
})

function nextQuestion(name){
    console.log(`Welcome back, ${name}`);
    ui.question('What is your favourite colour?\n', input => {
        try {
            if(input === "blue"){
                console.log('Excellent, you may proceed...')
                showTopSecretInfo();
            } else {
                throw new LOLError(`${name}'s favourite colour would never be ${input}! Get outta here!`)
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