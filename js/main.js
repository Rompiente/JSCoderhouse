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
    duration: 10000,
    close: true,
    gravity: "bottom",
    position: "right",
    stopOnFocus: false,
    style: {
      background: "#dc3545",
    },
    onClick: function(){
        topCard.innerHTML=""
        topChampion(topChampion=[])
    }
  }).showToast(),)

topDropdown.addEventListener('click', ()=>
mostrarTop(topChampion))
topDropdown.addEventListener('click', ()=>
topChampion(topChampion=[]))

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
    duration: 10000,
    close: true,
    gravity: "bottom",
    position: "right",
    stopOnFocus: false,
    style: {
      background: "#0d6efd",
    },
    onClick: function(){
        midCard.innerHTML=""
        midChampion(midChampion=[])
    }
  }).showToast(),)

midDropdown.addEventListener('click', ()=>
mostrarMid(midChampion))
midDropdown.addEventListener('click', ()=>
midChampion(midChampion=[]))

                                                                                                    //JG

const jgDropdown=document.getElementById("jgDropdown")
function mostrarJgDropdown(array){
    jgDropdown.innerHTML=""
    array.forEach(element => {
        jgDropdown.innerHTML+=`
        <ul>
        <li>${element.nombre}</li>
        <button onclick="agregarAJg(${element.id})"> Seleccionar</button>
        </ul>`
    })
}

mostrarJgDropdown(campeones)

let jgChampion=[]

function agregarAJg(idParam){
    const championSelected= campeones.find(e=>e.id==idParam)
    jgChampion.push(championSelected)
}

console.log(jgChampion)

const jgCard=document.getElementById("jgCard")

function mostrarJg(array){
    jgCard.innerHTML=""
    array.forEach(element => {
        jgCard.innerHTML+=`        
        <div class="card-header text-center">Campeón de Jg</div>
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

jgDropdown.addEventListener('click', ()=>
Toastify({
    text: `Campeón seleccionado para jg. Click para cancelar`,
    duration: 10000,
    close: true,
    gravity: "bottom",
    position: "right",
    stopOnFocus: false,
    style: {
      background: "#198754",
    },
    onClick: function(){
        jgCard.innerHTML=""
        jgChampion(jgChampion=[])
    }
  }).showToast(),)

jgDropdown.addEventListener('click', ()=>
mostrarJg(jgChampion))
jgDropdown.addEventListener('click', ()=>
jgChampion(jgChampion=[]))

                                                                                                    //ADC

const adcDropdown=document.getElementById("adcDropdown")
function mostrarAdcDropdown(array){
    adcDropdown.innerHTML=""
    array.forEach(element => {
        adcDropdown.innerHTML+=`
        <ul>
        <li>${element.nombre}</li>
        <button onclick="agregarAAdc(${element.id})"> Seleccionar</button>
        </ul>`
    })
}

mostrarAdcDropdown(campeones)

let adcChampion=[]

function agregarAAdc(idParam){
    const championSelected= campeones.find(e=>e.id==idParam)
    adcChampion.push(championSelected)
}

console.log(adcChampion)

const adcCard=document.getElementById("adcCard")

function mostrarAdc(array){
    adcCard.innerHTML=""
    array.forEach(element => {
        adcCard.innerHTML+=`        
        <div class="card-header text-center">Campeón de Adc</div>
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

adcDropdown.addEventListener('click', ()=>
Toastify({
    text: `Campeón seleccionado para adc. Click para cancelar`,
    duration: 10000,
    close: true,
    gravity: "bottom",
    position: "right",
    stopOnFocus: false,
    style: {
        color: "#000000",
        background: "#ffc107",
    },
    onClick: function(){
        adcCard.innerHTML=""
        adcChampion(adcChampion=[])
    }
  }).showToast(),)

adcDropdown.addEventListener('click', ()=>
mostrarAdc(adcChampion))
adcDropdown.addEventListener('click', ()=>
adcChampion(adcChampion=[]))

                                                                                                    //SUPP

const suppDropdown=document.getElementById("suppDropdown")
function mostrarSuppDropdown(array){
    suppDropdown.innerHTML=""
    array.forEach(element => {
        suppDropdown.innerHTML+=`
        <ul>
        <li>${element.nombre}</li>
        <button onclick="agregarASupp(${element.id})"> Seleccionar</button>
        </ul>`
    })
}

mostrarSuppDropdown(campeones)

let suppChampion=[]

function agregarASupp(idParam){
    const championSelected= campeones.find(e=>e.id==idParam)
    suppChampion.push(championSelected)
}

console.log(suppChampion)

const suppCard=document.getElementById("suppCard")

function mostrarSupp(array){
    suppCard.innerHTML=""
    array.forEach(element => {
        suppCard.innerHTML+=`        
        <div class="card-header text-center">Campeón de Supp</div>
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

suppDropdown.addEventListener('click', ()=>
Toastify({
    text: `Campeón seleccionado para supp. Click para cancelar`,
    duration: 10000,
    close: true,
    gravity: "bottom",
    position: "right",
    stopOnFocus: false,
    style: {
        color: "#000000",

        background: "#0dcaf0",
    },
    onClick: function(){
        suppCard.innerHTML=""
        suppChampion(suppChampion=[])
    }
  }).showToast(),)

suppDropdown.addEventListener('click', ()=>
mostrarSupp(suppChampion))
suppDropdown.addEventListener('click', ()=>
suppChampion(suppChampion=[]))