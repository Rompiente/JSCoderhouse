console.log("main.js")
/////Botones Modo Claro - Oscuro
let darkMode

(localStorage.getItem('darkMode')) ? darkMode = localStorage.getItem('darkMode'): localStorage.setItem('darkMode', 'dark')

let botonDarkMode = document.querySelector('#botonDarkMode')
let botonLightMode = document.querySelector('#botonLightMode')

if (darkMode == 'dark') {
    document.body.classList.add('darkMode')
} else {
    document.body.classList.remove('darkMode')
}
botonDarkMode.addEventListener('click', () => {
    document.body.classList.add('darkMode')
    localStorage.setItem('darkMode', 'dark')
})
botonLightMode.addEventListener('click', () => {
    document.body.classList.remove('darkMode')
    localStorage.setItem('darkMode', 'light')
})

/////TOP/////

const topDropdown = document.getElementById("topDropdown")

function mostrarTopDropdown(array) {
    topDropdown.innerHTML = ""
    array.forEach(element => {
        topDropdown.innerHTML += `
        <ul>
        <li class="champName">${element.name}</li>
        <button onclick='agregarATop("${element.id}")'> Seleccionar</button>
        </ul>`
    })
}

let topChampion = []

function agregarATop(idParam) {
    const championSelected = campeones.find(e => e.id === idParam)
    topChampion.push(championSelected)
}

console.log(topChampion)

const topCard = document.getElementById("topCard")

function mostrarTop(array) {
    topCard.innerHTML = ""
    array.forEach(element => {
        topCard.innerHTML += `        
        <h5 class="card-header text-center">${element.name}</h5>
        <img src="IMG/${element.image.full}" class="card-img-top" alt="Campeón de Top"> 
        <div class="card-body text-center">
        <h5 class="card-title">${element.title}</h5>
        <ul class="list-group list-group-flush">
        <li id="topAD" class="list-group-item AD">Daño Físico: ${element.info.attack}</li>
        <li class="list-group-item AP">Daño Mágico: ${element.info.magic}</li>
        <li class="list-group-item DEF">Resistencia: ${element.info.defense}</li>
        </ul>
        </div>
        </div>
        </div>`
    });
}

topDropdown.addEventListener('click', () =>
    Toastify({
        text: `Campeón seleccionado para top. Click para cancelar`,
        duration: 30000,
        close: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: false,
        style: {
            background: "#dc3545",
        },
        onClick: function () {
            topCard.innerHTML = ""
            topChampion(topChampion = [])
        }
    }).showToast(), )

topDropdown.addEventListener('click', () =>
    mostrarTop(topChampion))
topDropdown.addEventListener('click', () =>
    (topChampion = []))

/////MID/////

const midDropdown = document.getElementById("midDropdown")

function mostrarMidDropdown(array) {
    midDropdown.innerHTML = ""
    array.forEach(element => {
        midDropdown.innerHTML += `
        <ul>
        <li class="champName">${element.name}</li>
        <button onclick='agregarAMid("${element.id}")'> Seleccionar</button>
        </ul>`
    })
}

let midChampion = []

function agregarAMid(idParam) {
    const championSelected = campeones.find(e => e.id === idParam)
    midChampion.push(championSelected)
}

console.log(midChampion)

const midCard = document.getElementById("midCard")

function mostrarMid(array) {
    midCard.innerHTML = ""
    array.forEach(element => {
        midCard.innerHTML += `        
        <h5 class="card-header text-center">${element.name}</h5>
        <img src="IMG/${element.image.full}" class="card-img-mid" alt="Campeón de Mid"> 
        <div class="card-body text-center">
        <h5 class="card-title">${element.title}</h5>
        <ul class="list-group list-group-flush">
        <li class="list-group-item AD">Daño Físico: ${element.info.attack}</li>
        <li class="list-group-item AP">Daño Mágico: ${element.info.magic}</li>
        <li class="list-group-item DEF">Resistencia: ${element.info.defense}</li>
        </ul>
        </div>
        </div>
        </div>`
    });
}

midDropdown.addEventListener('click', () =>
    Toastify({
        text: `Campeón seleccionado para mid. Click para cancelar`,
        duration: 30000,
        close: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: false,
        style: {
            background: "#0d6efd",
        },
        onClick: function () {
            midCard.innerHTML = ""
            midChampion(midChampion = [])
        }
    }).showToast(), )

midDropdown.addEventListener('click', () =>
    mostrarMid(midChampion))
midDropdown.addEventListener('click', () =>
    (midChampion = []))

/////JG/////

const jgDropdown = document.getElementById("jgDropdown")

function mostrarJgDropdown(array) {
    jgDropdown.innerHTML = ""
    array.forEach(element => {
        jgDropdown.innerHTML += `
        <ul>
        <li class="champName">${element.name}</li>
        <button onclick='agregarAJg("${element.id}")'> Seleccionar</button>
        </ul>`
    })
}

let jgChampion = []

function agregarAJg(idParam) {
    const championSelected = campeones.find(e => e.id === idParam)
    jgChampion.push(championSelected)
}

console.log(jgChampion)

const jgCard = document.getElementById("jgCard")

function mostrarJg(array) {
    jgCard.innerHTML = ""
    array.forEach(element => {
        jgCard.innerHTML += `        
        <h5 class="card-header text-center">${element.name}</h5>
        <img src="IMG/${element.image.full}" class="card-img-jg" alt="Campeón de Jg"> 
        <div class="card-body text-center">
        <h5 class="card-title">${element.title}</h5>
        <ul class="list-group list-group-flush">
        <li class="list-group-item AD">Daño Físico: ${element.info.attack}</li>
        <li class="list-group-item AP">Daño Mágico: ${element.info.magic}</li>
        <li class="list-group-item DEF">Resistencia: ${element.info.defense}</li>
        </ul>
        </div>
        </div>
        </div>`
    });
}

jgDropdown.addEventListener('click', () =>
    Toastify({
        text: `Campeón seleccionado para jg. Click para cancelar`,
        duration: 30000,
        close: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: false,
        style: {
            background: "#198754",
        },
        onClick: function () {
            jgCard.innerHTML = ""
            jgChampion(jgChampion = [])
        }
    }).showToast(), )

jgDropdown.addEventListener('click', () =>
    mostrarJg(jgChampion))
jgDropdown.addEventListener('click', () =>
    (jgChampion = []))

/////ADC/////

const adcDropdown = document.getElementById("adcDropdown")

function mostrarAdcDropdown(array) {
    adcDropdown.innerHTML = ""
    array.forEach(element => {
        adcDropdown.innerHTML += `
        <ul>
        <li class="champName">${element.name}</li>
        <button onclick='agregarAAdc("${element.id}")'> Seleccionar</button>
        </ul>`
    })
}

let adcChampion = []

function agregarAAdc(idParam) {
    const championSelected = campeones.find(e => e.id === idParam)
    adcChampion.push(championSelected)
}

console.log(adcChampion)

const adcCard = document.getElementById("adcCard")

function mostrarAdc(array) {
    adcCard.innerHTML = ""
    array.forEach(element => {
        adcCard.innerHTML += `        
        <h5 class="card-header text-center">${element.name}</h5>
        <img src="IMG/${element.image.full}" class="card-img-adc" alt="Campeón de Adc"> 
        <div class="card-body text-center">
        <h5 class="card-title">${element.title}</h5>
        <ul class="list-group list-group-flush">
        <li class="list-group-item AD">Daño Físico: ${element.info.attack}</li>
        <li class="list-group-item AP">Daño Mágico: ${element.info.magic}</li>
        <li class="list-group-item DEF">Resistencia: ${element.info.defense}</li>
        </ul>
        </div>
        </div>
        </div>`
    });
}

adcDropdown.addEventListener('click', () =>
    Toastify({
        text: `Campeón seleccionado para adc. Click para cancelar`,
        duration: 30000,
        close: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: false,
        style: {
            color: "#000000",
            background: "#ffc107",
        },
        onClick: function () {
            adcCard.innerHTML = ""
            adcChampion(adcChampion = [])
        }
    }).showToast(), )

adcDropdown.addEventListener('click', () =>
    mostrarAdc(adcChampion))
adcDropdown.addEventListener('click', () =>
    (adcChampion = []))

/////SUPP/////

const suppDropdown = document.getElementById("suppDropdown")

function mostrarSuppDropdown(array) {
    suppDropdown.innerHTML = ""
    array.forEach(element => {
        suppDropdown.innerHTML += `
        <ul>
        <li class="champName">${element.name}</li>
        <button onclick='agregarASupp("${element.id}")'> Seleccionar</button>
        </ul>`
    })
}

let suppChampion = []

function agregarASupp(idParam) {
    const championSelected = campeones.find(e => e.id === idParam)
    suppChampion.push(championSelected)
}

console.log(suppChampion)

const suppCard = document.getElementById("suppCard")

function mostrarSupp(array) {
    suppCard.innerHTML = ""
    array.forEach(element => {
        suppCard.innerHTML += `        
        <h5 class="card-header text-center">${element.name}</h5>
        <img src="IMG/${element.image.full}" class="card-img-supp" alt="Campeón de Supp"> 
        <div class="card-body text-center">
        <h5 class="card-title">${element.title}</h5>
        <ul class="list-group list-group-flush">
        <li class="list-group-item AD">Daño Físico: ${element.info.attack}</li>
        <li class="list-group-item AP">Daño Mágico: ${element.info.magic}</li>
        <li class="list-group-item DEF">Resistencia: ${element.info.defense}</li>
        </ul>
        </div>
        </div>
        </div>`
    });
}

suppDropdown.addEventListener('click', () =>
    Toastify({
        text: `Campeón seleccionado para supp. Click para cancelar`,
        duration: 30000,
        close: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: false,
        style: {
            color: "#000000",
            background: "#0dcaf0",
        },
        onClick: function () {
            suppCard.innerHTML = ""
            suppChampion(suppChampion = [])
        }
    }).showToast(), )

suppDropdown.addEventListener('click', () =>
    mostrarSupp(suppChampion))
suppDropdown.addEventListener('click', () =>
    (suppChampion = []))

    /////Clear Buttons

    clearBtn.addEventListener('click', () =>
        topCard.innerHTML = "")
    clearBtn.addEventListener('click', () =>
        midCard.innerHTML = "")
    clearBtn.addEventListener('click', () =>
        jgCard.innerHTML = "")
    clearBtn.addEventListener('click', () =>
        adcCard.innerHTML = "")
    clearBtn.addEventListener('click', () =>
        suppCard.innerHTML = "")
    clearTop.addEventListener('click', () =>
        topCard.innerHTML = "")
    clearMid.addEventListener('click', () =>
        midCard.innerHTML = "")
    clearJg.addEventListener('click', () =>
        jgCard.innerHTML = "")
    clearAdc.addEventListener('click', () =>
        adcCard.innerHTML = "")
    clearSupp.addEventListener('click', () =>
        suppCard.innerHTML = "")







