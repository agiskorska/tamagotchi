const prompt = require('prompt');

class Pet {
    constructor(name, hunger, happiness, sleepiness, type) {
        this.name = name;
        this.hunger = hunger;
        this.happiness = happiness;
        this.sleepiness = sleepiness;
        this.type = type;
    }

    feed(food){
        const amount = food.length;
        this.hunger += amount
        console.log("Should be fed "+this.hunger)
    }

    live(){
        prompt.start();
        this.getPrompt();
        const interval = setInterval(() => {
            this.hunger -= 20
            if(this.hunger <=0) {
                clearInterval(interval)
                console.log(`You deaded ${this.name}, you monster!`)
            } else {
                console.log(this.hunger)
            }
        }, 5000)
    }
    
    feedFromPrompt(err, result) {
        if (err) {
          return onErr(err);
        }
        console.log('Command-line input received:');
        console.log(result.food)
        food = result.food;
        this.feed(food)
    }

    getPrompt(){
        let food = ''
        prompt.get(["food"], this.feedFromPrompt)
        this.feed(food)
        function onErr(err) {
        console.log(err);
        return 1;
        }
    }
}

module.exports = Pet