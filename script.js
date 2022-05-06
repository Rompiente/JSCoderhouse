let lolTeam = ["top", "mid", "jg", "adc", "supp"]

const campeones = [
    campeon1 = { id: 1, nombre: "Aatrox", rol: "Luchador"},
    campeon2 = { id: 2, nombre: "Ahri", rol: "Mago"},
    campeon3 = { id: 3, nombre: "Akali", rol: "Asesino"},
    campeon4 = { id: 4, nombre: "Akshan", rol: "Tirador"},
    campeon5 = { id: 5, nombre: "Alistar", rol: "Tanque"} ]

// Se pretende brindarle al usuario el ID del campeón con el nombre en el HTML

let topId = prompt("Ingrese número de ID para seleccionar el campeón de TOP")
let topName = campeones.find(campeones => campeones.id == topId)

lolTeam.splice(0, 1)
lolTeam.unshift(topName.nombre)

let midId = prompt("Ingrese número de ID para seleccionar el campeón de MID")
let midName = campeones.find(campeones => campeones.id == midId)

lolTeam.splice(1, 1)
lolTeam.unshift(midName.nombre)

let jgId = prompt("Ingrese número de ID para seleccionar el campeón de JG")
let jgName = campeones.find(campeones => campeones.id == jgId)

lolTeam.splice(2, 1)
lolTeam.unshift(jgName.nombre)

let adcId = prompt("Ingrese número de ID para seleccionar el campeón de ADC")
let adcName = campeones.find(campeones => campeones.id == adcId)

lolTeam.splice(3, 1)
lolTeam.unshift(adcName.nombre)

let suppId = prompt("Ingrese número de ID para seleccionar el campeón de SUPP")
let suppName = campeones.find(campeones => campeones.id == suppId)

lolTeam.splice(4, 1)
lolTeam.unshift(suppName.nombre)

/* La idea es que el usuario vaya armando el equipo y, según las características de
los campeones que vaya eligiendo (cantidad de CC, daño físico y mágico, frontlane, combos, etc) 
ir recomendándole los campeones más óptimos para completar el equipo */

alert("Tu equipo se compone de:")
alert(lolTeam[lolTeam.length - 1] + " como TOP")
alert(lolTeam[lolTeam.length - 2] + " como MID")
alert(lolTeam[lolTeam.length - 3] + " como JG")
alert(lolTeam[lolTeam.length - 4] + " como ADC")
alert(lolTeam[lolTeam.length - 5] + " como SUPP")