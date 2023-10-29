alert("Je fonctionne bien")

var a = 4
var b = 4
var c = 3
if (a == b) {
    console.log("c'est egal");
}

if (c < b && b + a < 3) {
    console.log("ok")
}   else {
    console.log("rate")
}

switch (a) {
    case b:
        console.log('egal a b')
        break
    case c:
        console.log('egal a c')
        break
    default:
        console.log('egal a rien')
}

let d = 20
for(var e = 0; e < d; e++) {
    console.log('oklm')
}

let f = 3

while (f < 9) {
    console.log(f)
    f++
    if (f == 8) {
        break
    }
    if (f == 7) {
        continue
    }
    console.log(f)
}
console.log('j\'ai casse la boucle au bout de ' + f + ' tours')

let g = 1

while (g < 100) {
    g++
    if (g / 15) {
        console.log('Fizzbuzz')
    }
    if (g / 3) {
        console.log('Fizz')
    }
    if (g / 5) {
        console.log('Buzz')
    }
    if (g == 100) {
        break
    }
}

/*let h = 0

h % 3 == 0

while (h<=33) {
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
}*/