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
        // on click this function adds appropriate stat to pet
        if(id === "sleepiness"){
            this.stats.sleepiness *= 3
        } else {
            this.stats[id] += 10
        }
        console.log(this.stats[id])
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

    live(){
        this.form.addEventListener('click', this.submitHandler)
        const interval = setInterval(() => {
            if(this.stats.hunger > 0 && this.stats.happiness > 0 && this.stats.sleepiness > 0) {
                this.stats.happiness -= 10 * this.multipliers.happiness
                this.stats.hunger -= 10 * this.multipliers.hunger
                this.stats.sleepiness -= 10 * this.multipliers.sleepiness
                this.displayText()
            } else {
                this.info.textContent = "You killed your pet, you monster!!!!"
                clearInterval(interval)
            }
        }, 5000)
    }
}