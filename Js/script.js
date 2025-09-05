const nota = 80
const asist = 85
const final = true

if(nota == 100 && asist === 100){

    alert("sacaste la nota maxima y tambien la asistencia")

}else if(nota >= 90 && asist >= 95 && final === true){

    alert("Te graduaste con honores")

}else if(nota >= 90 && asist >= 95 && final === false){

    alert("casi apruebas con honores")

}else if(nota < 70 && asist < 80 ){

    alert("Pasaste")

}else if(nota < 69 && final == true){

    alert("Casi pierdes")

}else if(nota < 65 && asist < 79 ){

    alert("Recuperacion")

}else if (nota < 50 && asist < 70 && final === false){
    alert("Perdiste el año ")
}else{
    alert("salte del colegio")
}