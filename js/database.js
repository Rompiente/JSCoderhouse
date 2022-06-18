console.log("database.js")

let campeones = [] 

fetch('https://ddragon.leagueoflegends.com/cdn/12.11.1/data/es_MX/champion.json')
.then((response) => response.json())
.then((json) => {
  console.log(json.data)
  for(key in json.data){
    campeones.push(json.data[key])
  }
    console.log(campeones)
    mostrarTopDropdown(campeones)
    mostrarMidDropdown(campeones)
    mostrarJgDropdown(campeones)
    mostrarAdcDropdown(campeones)
    mostrarSuppDropdown(campeones)
  })


