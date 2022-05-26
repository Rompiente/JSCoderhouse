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

//TOP

const topDropdown=document.getElementById("topDropdown")
function mostrarTopDropdown(array){
    topDropdown.innerHTML=""
    array.forEach(element => {
        topDropdown.innerHTML+=`
        <ul>
        <li>${element.nombre}</li>
        <button onclick="agregarATop(${element.id})"> Seleccionar</button>
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

topDropdown.addEventListener('click', ()=>
Toastify({
    text: `Campeón seleccionado para top. Click para cancelar`,
    duration: 60000,
    close: true,
    gravity: "top",
    position: "right",
    stopOnFocus: true,
    style: {
      background: "#dc3545",
    },
    onClick: function(){
        topCard.innerHTML=""
    }
  }).showToast(),)

topDropdown.addEventListener('click', ()=>
mostrarTop(topChampion))

//MID

const midDropdown=document.getElementById("midDropdown")
function mostrarMidDropdown(array){
    midDropdown.innerHTML=""
    array.forEach(element => {
        midDropdown.innerHTML+=`
        <ul>
        <li>${element.nombre}</li>
        <button onclick="agregarAMid(${element.id})"> Seleccionar</button>
        </ul>`
    })
}

mostrarMidDropdown(campeones)

let midChampion=[]

function agregarAMid(idParam){
    const championSelected= campeones.find(e=>e.id==idParam)
    midChampion.push(championSelected)
}

console.log(midChampion)

const midCard=document.getElementById("midCard")

function mostrarMid(array){
    midCard.innerHTML=""
    array.forEach(element => {
        midCard.innerHTML+=`        
        <div class="card-header text-center">Campeón de Mid</div>
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

midDropdown.addEventListener('click', ()=>
Toastify({
    text: `Campeón seleccionado para mid. Click para cancelar`,
    duration: 60000,
    close: true,
    gravity: "top",
    position: "right",
    stopOnFocus: true,
    style: {
      background: "#0d6efd",
    },
    onClick: function(){
        midCard.innerHTML=""
    }
  }).showToast(),)

midDropdown.addEventListener('click', ()=>
mostrarMid(midChampion))
