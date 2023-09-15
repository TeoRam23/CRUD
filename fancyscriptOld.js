var table = document.querySelector("tbody")
var save_button = document.querySelector("#save")
var inputs = document.querySelectorAll("input[type='text']")

var delete_buttons = document.querySelectorAll("td[class='deleteknapp']")
var delete_test = document.querySelector("#delete99999")

var id = 0

console.log(inputs)




function save_function(){
    id++

    tr = "<tr id='tr"+id+"'>"
    
    inputs.forEach(
        function(node, index){
        console.log(node.value)
        tr += "<td>" + node.value + "</td>"
        }
    )

    tr += "<td class='deleteknapp' id='delete"+id+"' onclick='delete_function(this)'>Delete</td></tr>"
    table.innerHTML += tr


    console.log("klikkeklikke")
}

save_button.addEventListener("click", save_function)



function delete_functiontest(){
    var trid = delete_test.id.replace("delete", "tr")
    console.log(trid)

    document.getElementById(trid).remove();
}

delete_test.addEventListener("click", delete_functiontest)






function delete_function(e){

    console.log(e)

    trid = e.id.replace("delete", "tr")
    console.log(trid)

    document.getElementById(trid).remove();
}

//delete_buttons.addEventListener("click", delete_function)