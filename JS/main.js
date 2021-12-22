let salute = prompt("Hola usuario! Diga 'Hola' para continuar")
let age = prompt("Hola usuario! Diga su edad para continuar")
let hiOne = salute == "Hola"
let pAge = +age // o parseInt

if(hiOne && (pAge >= 25)){

    alert("Bienvenido al Local! Estas validado para utilizar esta pagina!")


}
else if(hiOne && pAge < 25){

    alert("Bienvenido pero lamentablemente eres menor de edad!")
}

else{
    alert("Ese es un hola incorrecto y ni siquiera verificaste tu edad!")

}


    




