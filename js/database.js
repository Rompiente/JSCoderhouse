console.log("bd.js")

let campeones = [] /* [
  //template  { id:"", nombre: "", rol: "", trait1: "", trait2:"", trait3:"", trait4:""},
  { id:"1", nombre: "Aatrox", rol: "Luchador", trait1: "", trait2:"", trait3:"", trait4:""},
  { id:"2", nombre: "Ahri", rol: "Mago", trait1: "", trait2:"", trait3:"", trait4:""},
  { id:"3", nombre: "Akali", rol: "Asesino", trait1: "", trait2:"", trait3:"", trait4:""},
  { id:"4", nombre: "Akshan", rol: "Tirador", trait1: "", trait2:"", trait3:"", trait4:""},
  { id:"5", nombre: "Alistar", rol: "Tanque", trait1: "", trait2:"", trait3:"", trait4:""},
  { id:"6", nombre: "Amumu", rol: "Tanque", trait1: "", trait2:"", trait3:"", trait4:""}, 
  { id:"7", nombre: "Anivia", rol: "Mago", trait1: "", trait2:"", trait3:"", trait4:""}, 
  { id:"8", nombre: "Annie", rol: "Mago", trait1: "", trait2:"", trait3:"", trait4:""}, 
  { id:"9", nombre: "Aphelios", rol: "Tirador", trait1: "", trait2:"", trait3:"", trait4:""}, 
  { id:"10", nombre: "Ashe", rol: "Tirador", trait1: "", trait2:"", trait3:"", trait4:""}, 
]  */


fetch('https://ddragon.leagueoflegends.com/cdn/12.10.1/data/es_MX/champion.json')
.then((response) => response.json())
.then((json) => campeones.push(json))

console.log(campeones)