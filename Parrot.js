class Parrot extends Pet {
    constructor(name) {
        super(name, 100, 200, 30, "Parrot")
        this.multipliers = {
            hunger: 2,
            happiness: 4,
            sleepiness: 1
        }
    }
}