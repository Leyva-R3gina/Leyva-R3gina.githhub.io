function revisarQuiz(){
    let count = 0

    var edadElement = document.getElementById("edad")
    var edad = edadElement.options[edadElement.selectedIndex].value
    
    var comidaElement = document.getElementById("comida")
    var comida = comidaElement.options[comidaElement.selectedIndex].value

    var bandaElement = document.getElementById("banda")
    var banda = bandaElement.options[bandaElement.selectedIndex].value

    var libroElement = document.getElementById("libro")
    var libro = libroElement.options[libroElement.selectedIndex].value

    if(edad === "17"){
        count++
    }

    if(comida === "Sushi"){
        count++
    }

    if(banda === "BTS"){
        count++
    }

    if(libro === "The outsiders"){
        count++
    }

    alert("Tuviste: " + count + "/4 respuestas correctas.")
}
