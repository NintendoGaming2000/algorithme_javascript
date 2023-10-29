class Tueur {
    constructor(name, hp) {
        this.name = name;
        this.hp = hp;
    }
}

let jason = new Tueur ("Jason", 100)

let character_stats = [
    { surv_class: "Nerd", probmort: 0.3, probesquive: 0.4, probmortdegats: 0.3 },
    { surv_class: "Sportif", probmort: 0.2, probesquive: 0.6, probmortdegats: 0.2 },
    { surv_class: "Blond", probmort: 0.4, probesquive: 0.5, probmortdegats: 0.1 },
    { surv_class: "DJ", probmort: 0.1, probesquive: 0.5, probmortdegats: 0.4 },
    { surv_class: "Game Designer", probmort: 0.5, probesquive: 0.4, probmortdegats: 0.1 },
    { surv_class: "Intello", probmort: 0.3, probesquive: 0.6, probmortdegats: 0.1 },
];

let prenoms = ["Kevin", "Bobby", "Chuck", "Pamela", "Brigitte", "Pablo", "Charles", "Penelope"]

let RIP_list = []

class Survivant {
    constructor(prenom, surv_class, probmort, probesquive, probmortdegats, isAlive) {
        this.prenom = prenom;
        this.surv_class = surv_class;
        this.probmort = probmort;
        this.probesquive = probesquive;
        this.probmortdegats = probmortdegats;
        this.isAlive = isAlive;
    }
   
    isDead() {
        let a = Math.random() < this.probmort;
        if (a) {
            console.log(this.prenom + " est mort.")
            this.isAlive = false
            return(a)
        }
    }
    
    isMissed() {
        let b = Math.random() < this.probesquive;
        if (b) {
            jason.hp -= 10
            console.log(this.prenom + " a esquivé l'attaque et a reduit " + jason.name + " de " + 10 + " hp.")
            console.log("Il reste " + jason.hp + " hp a " + jason.name)
            return(b)
        }
    }

    isDeadAndHit() {
        let c = Math.random() < this.probmortdegats;
        if (c) {
            jason.hp -= 15
            console.log(this.prenom + " est mort et a reduit " + jason.name + " de " + 15 + " hp.")
            console.log("Il reste " + jason.hp + " hp à " + jason.name)
            this.isAlive = false
            return(c)
        }
    }
}

let survivor_count = 0

while (survivor_count < 5 && jason.hp > 0) {

    //on crée des survivants un a la fois
    survivor_name = prenoms[Math.floor(Math.random() * prenoms.length)]
    
    let characterpick = (Math.floor(Math.random() * character_stats.length));
    surv_class = character_stats[characterpick].surv_class 
    probmort = character_stats[characterpick].probmort 
    probesquive = character_stats[characterpick].probesquive
    probmortdegats = character_stats[characterpick].probmortdegats

    let survivor = new Survivant(survivor_name, surv_class, probmort, probesquive, probmortdegats, true)

    console.log("Jason est face à " + survivor.prenom + " le "+survivor.surv_class+".")

while (jason.hp > 0 && survivor.isAlive) {
// Jason et le survivant se battent jusqu'à le mort de l'un ou l'autre

if (!survivor.isDead()){
    if (!survivor.isMissed()){
    survivor.isDeadAndHit()
        }
    }
}

RIP_list.push(" " + survivor.prenom + " le " + surv_class)

survivor_count++
}
//On affiche les resultats.

      if (jason.hp <= 0){
            console.log(jason.name + " est mort !")
      }

        if (jason.hp > 0 && survivor_count>=5) {
            console.log(jason.name + " a gagné !")
        }
        if (survivor_count > 0){
            console.log("RIP aux victimes: " + RIP_list + ".")
        }
