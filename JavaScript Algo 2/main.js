alert ("Je functionne bien")

let users = ["Stephanie", "Gaïa", "Etienne", "Michel", "Roberto", "Julie"]

function countCharacter(value) {
    return value.length
}

users. forEach(users => {
    if (countCharacter(users) < 5) {
        console.log("c'est un prenom long de plus de 5 lettres.")
    } else {
        console.log("ce n'est pas du tout un prenom long.")
    }
});