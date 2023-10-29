alert("Je fonctionne bien")

let h = 0

h / 3 == 0

while (h<=33) {
    h++
    console.log(h)
    if (h == 17) {
        h += 10
    }
    if (h == 28) {
        continue
    }

    if (h == 33) {
        console.log('reussi')
        break
    }
}

var a = "Jean"
var b = "Paul"
var result = checkName(a, b)

function checkName(prenom1, prenom2) {
    if (prenom1 == prenom2) {
        return true
    } else {
        return false
    }
}

console.log(result)

let names = []

names.push ("Vincent", "Paul", "Arthur")

names.forEach(function(name) {
    console.log(name + " va a la peche")
})

let student = {
    
    name: "Harold",
    
    favoriteFood: "Spaghetti",
    
    city: "London"
}

let result2 = 0

let properties = Object.keys(student)

console.log(properties)
properties.forEach(function (properties) {
    result2 += properties.length
})
console.log(result2)

if(result / 2 == 0) {
    console.log("pair")
} else {
    console.log("impair")
}

class Pokemon {
    constructor(name, attack, defense, hp, luck) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.hp = hp;
        this.luck = luck;        
    }

    getAttack() {
        console.log(this.attack);
    }

    isLucky() {
        return Math.random() < this.luck
    }
    
    move(defenseur) {
        if (this.isLucky()) {
            let dmg = this.attack - defenseur.defense
            defenseur.hp -= dmg
            console.log(dmg + " degats ont ete infliges")
            console.log("Il reste " + defenseur.hp + " a " + defenseur.name)
        } else {
            console.log("L'attaque a rate")
        }
    }
}

let squirtle = new Pokemon("Squirtle", 50, 30, 100, 0.6)
let pikachu = new Pokemon("Pikachu", 70, 25, 100, 0.8)

while (squirtle.hp > 0 && pikachu.hp > 0) {
    
    squirtle.move(pikachu)
    if(pikachu.hp <= 0) {
        console.log("Pikachu is KO")
        break;
    }

    pikachu.move(squirtle)
    if(squirtle.hp <= 0) {
        console.log("Squirtle is KO")
        break;
    }
}