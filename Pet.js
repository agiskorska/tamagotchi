class Pet {
    constructor(name, hunger, happiness, sleepiness, type) {
        this.name = name;
        this.stats = {
            hunger,
            happiness,
            sleepiness
        }
        this.multipliers = {
            hunger: 1,
            happiness: 1,
            sleepiness: 1
        }
        this.type = type;
        //TODO is there a better way to do this?
        this.form = document.getElementById('form')
        this.info = document.getElementById("info")
    }

    supply(id){
        if(id === "sleepiness"){
            this.stats.sleepiness *= 3
        } else {
            this.stats[id] += 10
        }
        this.displayText()

    }

    submitHandler = (e) => {
        // this handles an event listener on the buttons
        e.preventDefault()
        // if goToBed clicked, disable all buttons for 15 sec
        if (e.target.id === "sleepiness"){
            document.querySelectorAll("input").forEach((btn) => {
                btn.disabled = true;
                setTimeout(()=>{
                    btn.disabled = false;
                    console.log('Button Activated')}, 5000)
            })
        }
        this.supply(e.target.id)
    }
    
    displayText(){
        this.info.textContent = 
        `hunger: ${this.stats.hunger}; happiness: ${this.stats.happiness}; sleepiness: ${this.stats.sleepiness}`
    }

    calculateStats(int){
        for(let stat in this.stats) {
            if(this.stats[stat] > 0) {
                this.stats[stat] -= 10 * this.multipliers[stat]
            } else {
                console.log(this.info.textContent)
                this.info.textContent = "You killed your pet, you monster!!!!"
                clearInterval(int)            
            }
            
        }

    }

    live(){
        this.form.addEventListener('click', this.submitHandler)
        const interval = setInterval(() => {
            this.displayText()

            this.calculateStats(interval)
        }, 3000)
    }
}

// if(this.stats.hunger > 0 && this.stats.happiness > 0 && this.stats.sleepiness > 0) {
//     this.stats.happiness -= 10 * this.multipliers.happiness
//     this.stats.hunger -= 10 * this.multipliers.hunger
//     this.stats.sleepiness -= 10 * this.multipliers.sleepiness
//     this.displayText()
// } else {
//     this.info.textContent = "You killed your pet, you monster!!!!"
//     clearInterval(interval)
// }