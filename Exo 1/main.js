class Personnage {
    constructor(name, sante_mentale) {
        this.name = name;
        this.sante_mentale = sante_mentale;
    }
}

let john = new Personnage("John", 10)

let songs = ["Anissa - Wejdene", "Cold Heart - Elton John", "Can't Stop the Feeling - Justin Timberlake", "Bohemian Rhapsody - Queen", "Hot 'n' Cold - Katy Perry"]

let feux_rouges_restants = 30

let changement_taxis = 0

while (feux_rouges_restants > 0 && john.sante_mentale > 0) {
    let song_playing = (Math.floor(Math.random() * songs.length));
    if (song_playing == 0) {
        john.sante_mentale--
        changement_taxis++
    }
    feux_rouges_restants--
    console.log("Chanson en cours: " + songs[song_playing] + ". Il reste " + feux_rouges_restants + " feux rouges.")
}

if (john.sante_mentale > 0) {
        console.log(john.name + " est arrivé a sa destination et à fait " + changement_taxis + " changements de taxis.")
    } else {
        console.log("Explosion!")
    }