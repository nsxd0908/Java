const rango = document.getElementById("rango")
const parrafo = document.getElementById("valor")

function rangoActualizar(){
    if(rango.value > 40){
        parrafo.textContent = "Calor"
         document.body.className = "Calor"
    }else if(rango.value < 20 ){
        parrafo.textContent = "Normal"
         document.body.className = "Normal"
    }else{
        parrafo.textContent = "Frio"
         document.body.className = "Frio"
    }

}

rangoActualizar()
rango.addEventListener('input', rangoActualizar)