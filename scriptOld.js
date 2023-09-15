var table = document.querySelector("#pikmin")
var save_button = document.querySelector("#save")

var navn_input = document.querySelector("#navn")
var element_input = document.querySelector("#element")
var unikE_input = document.querySelector("#unikE")
var attack_input = document.querySelector("#attack")
var fart_input = document.querySelector("#fart")
var bere_input = document.querySelector("#bere")
var forst_input = document.querySelector("#forst")
var farge_input = document.querySelector("#farge")
var blomst_input = document.querySelector("#blomst")
var oyne_input = document.querySelector("#oyne")
var unikU_input = document.querySelector("#unikU")




function save_function(){
    navn_input = document.querySelector("#navn");
    table.innerHTML += "<tr><td>" + navn_input.value + 
    "</td><td>" + element_input.value + 
    "</td><td>" + unikE_input.value + 
    "</td><td>" + attack_input.value + 
    "</td><td>" + fart_input.value + 
    "</td><td>" + bere_input.value + 
    "</td><td>" + forst_input.value + 
    "</td><td>" + farge_input.value + 
    "</td><td>" + blomst_input.value + 
    "</td><td>" + oyne_input.value + 
    "</td><td>" + unikU_input.value + "</td><tr>"
    //noenoe_input.value

    console.log("klikkeklikke")
}

save_button.addEventListener("click", save_function)