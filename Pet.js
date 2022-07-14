class Pet {
    constructor(name, hunger, happiness, sleepiness, type) {
        this.name = name;
        this.stats = {
            hunger,
            happiness,
            sleepiness
        }
        this.type = type;
        //TODO is there a better way to do this?
        this.form = document.getElementById('form')
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
    
    live(){
        this.form.addEventListener('click', this.submitHandler)
        const interval = setInterval(() => {
            //TODO this is not taking away - chcek why
            for(let stat in this.stats) {
                let currentLevel = this.stats[stat]
                if(currentLevel <=0) {
                    console.log("You killed your pet, you monster!")
                    clearInterval(interval)
                } else {
                    currentLevel = currentLevel - 20
                    console.log(currentLevel)
                }
            }
        }, 5000)
    }
}