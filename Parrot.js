const Pet = require('./Pet')
class Parrot extends Pet {
    constructor(name, hunger, happiness, sleepiness) {
        super(name, hunger, happiness, sleepiness, "Parrot")
    }
}

module.exports = Parrot