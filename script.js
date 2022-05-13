let lolTeam = ["top", "mid", "jg", "adc", "supp"]

const campeones = [
    campeon1 = { id: 1, nombre: "Aatrox", rol: "Luchador"},
    campeon2 = { id: 2, nombre: "Ahri", rol: "Mago"},
    campeon3 = { id: 3, nombre: "Akali", rol: "Asesino"},
    campeon4 = { id: 4, nombre: "Akshan", rol: "Tirador"},
    campeon5 = { id: 5, nombre: "Alistar", rol: "Tanque"} ]

let topId = prompt("Ingrese ID del campeón de TOP")
let topName = campeones.find(campeones => campeones.id == topId)
let topRol = topName.rol

lolTeam.splice(0, 1)
lolTeam.unshift(topName.nombre)

let midId = prompt("Ingrese ID del campeón de MID")
let midName = campeones.find(campeones => campeones.id == midId)
let midRol = midName.rol

lolTeam.splice(1, 1)
lolTeam.unshift(midName.nombre)

let jgId = prompt("Ingrese ID del campeón de JG")
let jgName = campeones.find(campeones => campeones.id == jgId)
let jgRol = jgName.rol

lolTeam.splice(2, 1)
lolTeam.unshift(jgName.nombre)

let adcId = prompt("Ingrese ID del campeón de ADC")
let adcName = campeones.find(campeones => campeones.id == adcId)
let adcRol = adcName.rol

lolTeam.splice(3, 1)
lolTeam.unshift(adcName.nombre)

let suppId = prompt("Ingrese ID del campeón de SUPP")
let suppName = campeones.find(campeones => campeones.id == suppId)
let suppRol = suppName.rol

lolTeam.splice(4, 1)
lolTeam.unshift(suppName.nombre)

let topChampion = document.getElementById("top")
topChampion.innerText = lolTeam[lolTeam.length - 1] + " como TOP"
let midChampion = document.getElementById("mid")
midChampion.innerText = lolTeam[lolTeam.length - 2] + " como MID"
let jgChampion = document.getElementById("jg")
jgChampion.innerText = lolTeam[lolTeam.length - 3] + " como JG"
let adcChampion = document.getElementById("adc")
adcChampion.innerText = lolTeam[lolTeam.length - 4] + " como ADC"
let suppChampion = document.getElementById("supp")
suppChampion.innerText = lolTeam[lolTeam.length - 5] + " como SUPP"

let tophover = document.getElementById("top")
tophover.onmouseover = () => {
    topChampion.innerText = "Rol: " + topRol
}
tophover.onmouseout = () => {
    topChampion.innerText = lolTeam[lolTeam.length - 1] + " como TOP"
}

let midhover = document.getElementById("mid")
midhover.onmouseover = () => {
    midChampion.innerText = "Rol: " + midRol
}
midhover.onmouseout = () => {
    midChampion.innerText = lolTeam[lolTeam.length - 2] + " como MID"
}

let jghover = document.getElementById("jg")
jghover.onmouseover = () => {
    jgChampion.innerText = "Rol: " + jgRol
}
jghover.onmouseout = () => {
    jgChampion.innerText = lolTeam[lolTeam.length - 3] + " como JG" 
}

let adchover = document.getElementById("adc")
adchover.onmouseover = () => {
    adcChampion.innerText = "Rol: " + adcRol
}
adchover.onmouseout = () => {
    adcChampion.innerText = lolTeam[lolTeam.length - 4] + " como ADC"
}

let supphover = document.getElementById("supp")
supphover.onmouseover = () => {
    suppChampion.innerText = "Rol: " + suppRol
}
supphover.onmouseout = () => {
    suppChampion.innerText = lolTeam[lolTeam.length - 5] + " como SUPP"
}

/* La idea es que el usuario vaya armando el equipo y, según las características de
los campeones que vaya eligiendo (cantidad de CC, daño físico y mágico, frontlane, combos, etc) 
ir recomendándole los campeones más óptimos para completar el equipo */



