const Pago = document.getElementById("Pago")
const Horas = document.getElementById("Horas")
const Time = document.getElementById("Tiempo")

const Quincenal = document.getElementById("Quincenal")
const Semanal = document.getElementById("Semanal")
const Mensual = document.getElementById("Mensual")



function Calcular() {
let total = 0

if(Time.value == "Quincenal"){
    total.value = Pago.value * Horas.value * 2
}else if(Time.value == "Semanal"){
    total.value = Pago.value * Horas.value * 1
}else if(Time.value == "Mensual"){
    total.value = Pago.value * Horas.value * 4
}

ResultadoSpan.innerText = total


}

