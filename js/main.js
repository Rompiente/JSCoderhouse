console.log("main.js")

let darkMode

(localStorage.getItem('darkMode')) ? darkMode = localStorage.getItem('darkMode') : localStorage.setItem('darkMode','dark')

let botonDarkMode = document.querySelector('#botonDarkMode')
let botonLightMode = document.querySelector('#botonLightMode')

if(darkMode == 'dark') {
    document.body.classList.add('darkMode')
} else {
    document.body.classList.remove('darkMode')
}
botonDarkMode.addEventListener('click', ()=> {
    document.body.classList.add('darkMode')
    localStorage.setItem('darkMode', 'dark')
})
botonLightMode.addEventListener('click', ()=> {
    document.body.classList.remove('darkMode')
    localStorage.setItem('darkMode', 'light')
})

const topDropdown=document.getElementById("topDropdown")
function mostrarTopDropdown(array){
    topDropdown.innerHTML=""
    array.forEach(element => {
        topDropdown.innerHTML+=`
        <ul>
        <li>${element.nombre}</li>
        <button onclick="agregarATop(${element.id})"> Seleccionar </button>
        </ul>`
    })
}

mostrarTopDropdown(campeones)

let topChampion=[]

function agregarATop(idParam){
    const championSelected= campeones.find(e=>e.id==idParam)
    topChampion.push(championSelected)
}

console.log(topChampion)

const topCard=document.getElementById("topCard")

function mostrarTop(array){
    topCard.innerHTML=""
    array.forEach(element => {
        topCard.innerHTML+=`        
        <div class="card-header text-center">Campeón de Top</div>
        <div class="card-body text-center">
        <h5 class="card-title">${element.nombre}</h5>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">Rol: ${element.rol}</li>
        <li class="list-group-item">Trait1: ${element.trait1}</li>
        <li class="list-group-item">Trait2: ${element.trait2}</li>
        <li class="list-group-item">Trait3: ${element.trait3}</li>
        <li class="list-group-item">Trait4: ${element.trait4}</li>
        </ul>
        </div>
        </div>
        </div>`
    });
}

/* const clearTopBtn=document.getElementById("clearTopBtn")
function clearTop(){
    topCard.innerHTML=""
}
clearTopBtn.addEventListener('click', ()=>
clearTop())
 */

topDropdown.addEventListener('click', ()=>
mostrarTop(topChampion))




