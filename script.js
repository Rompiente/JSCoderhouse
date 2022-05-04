let lolTeam = ["top", "mid", "jg", "adc", "supp"]

lolTeam.splice(0, 1)
lolTeam.unshift(prompt("¿Qué campeón seleccionás para top?"))

lolTeam.splice(1, 1)
lolTeam.unshift(prompt("¿Qué campeón seleccionás para mid?"))

lolTeam.splice(2, 1)
lolTeam.unshift(prompt("¿Qué campeón seleccionás para jg?"))

lolTeam.splice(3, 1)
lolTeam.unshift(prompt("¿Qué campeón seleccionás para adc?"))

lolTeam.splice(4, 1)
lolTeam.unshift(prompt("¿Qué campeón seleccionás para supp?"))

alert("Tu equipo se compone de:")
alert(lolTeam[lolTeam.length - 1] + " como TOP")
alert(lolTeam[lolTeam.length - 2] + " como MID")
alert(lolTeam[lolTeam.length - 3] + " como JG")
alert(lolTeam[lolTeam.length - 4] + " como ADC")
alert(lolTeam[lolTeam.length - 5] + " como SUPP")