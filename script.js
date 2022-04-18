var i = parseInt(prompt("Vamos a averigüar en qué año naciste. Ingresá tu edad:"))

while(isNaN(i))
    var i = parseInt(prompt("¡Ingresá un número válido!"))

var anioAct = parseInt(prompt("¿En qué año estamos?"))

while(isNaN(anioAct))
    var anioAct = parseInt(prompt("¡Ingresá un número válido!"))

var yaCumplio = prompt("¿Ya cumpliste años este año?").toLowerCase()

while (yaCumplio != "si" && yaCumplio != "no")
var yaCumplio = prompt("¿Ya cumpliste años este año? CONTESTÁ 'SI' O 'NO'").toLowerCase()

if (yaCumplio === "no") {
    var edad = i + 1
} else if (yaCumplio === "si") {
    var edad = i
}

let anioNac = (anioAct - edad)
    
alert("Naciste en el año " + anioNac)