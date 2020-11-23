// -------------------------------------------------
// Run `node level_10s_only.js` to access the vault!
// See lines 78+ for the entry point.
// -------------------------------------------------
// -------------------------------------------------

// Using the built in readline module to get user input. prompt-sync or inquirer can give a cleaner experience.
const ui = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// Defining a custom Error by extending the built in Error object
class SHIELDError extends Error {
    constructor(msg){
        super(`\nAUTHORITIES HAVE BEEN ALERTED! ${msg}!\n`);
        this.name = 'SHIELDError';
    };

    shout(){ 
        console.clear()
        console.log(`I am a ${this.name}!`.toUpperCase())
    }
};


// Level 10 Access List!
const level10s = [{name: "Fury", faveColour: "red"}, {name: "Pierce", faveColour: "blue"}];

// Top Secret Vault App!
class SecretVaultAccess {

    run(){
        console.clear()
        this.firstQuestion();
    }

    firstQuestion(){
        ui.question('\nWelcome to the Top Secret Info Vault. What is your last name?\n', input => {
            try {
                this.user = level10s.find(u => u.name.toLowerCase() === input.toLowerCase());
                if(!this.user){throw new Error(`Hey, you can't be here, ${input[0].toUpperCase() + input.slice(1)}!`);}
                this.nextQuestion()
            } catch (err) {
                this.errorAndClose(err)
            };
        })
    }

    nextQuestion(){
        console.log(`\nWelcome back, ${this.user.name}`);
        ui.question('What is your favourite colour?\n', input => {
            try {
                if(input === this.user.faveColour){
                    console.log('Excellent, you may proceed...');
                    this.showTopSecretInfo();
                } else {
                    throw new SHIELDError(`${this.user.name}'s favourite colour would never be ${input}! Get outta here!`);
                } 
            } catch (err) {
                err.shout() // custom error method
                this.errorAndClose(err)
            };
        })
    };

    errorAndClose(err){
        console.log('\n', err.message, '\n'); // Experiment with err, err.name, err.message, err.stack
        ui.close();
    }
    
    showTopSecretInfo(){
        console.log("\nVisit https://marvelcinematicuniverse.fandom.com/wiki/Marvel_Cinematic_Universe_Wiki for the Top Secret Info\n");
        ui.close();
    };
}

// Start a new instance of SecretVaultAccess and run it
const app = new SecretVaultAccess()
app.run()
