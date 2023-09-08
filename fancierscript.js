 
// først: hente ut table data fra localstorage
const retrievedData = localStorage.getItem('tableData');
 
function rebuildTable(data) {
    const tableSave = document.getElementById('pikmin').getElementsByTagName('tbody')[0];
    //tableSave.innerHTML = ''; // clear existing rows
    
    data.forEach((row) => {
        const newRow = tableSave.insertRow();
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);
        const cell5 = newRow.insertCell(4);
        const cell6 = newRow.insertCell(5);
        const cell7 = newRow.insertCell(6);
        const cell8 = newRow.insertCell(7);
        const cell9 = newRow.insertCell(8);
        const cell10 = newRow.insertCell(9);
        const cell11 = newRow.insertCell(10);
        const cell12 = newRow.insertCell(11);
        cell1.textContent = row.navn;
        cell2.textContent = row.element;
        cell3.textContent = row.unikE;
        cell4.textContent = row.attack;
        cell5.textContent = row.fart;
        cell6.textContent = row.bere;
        cell7.textContent = row.forst;
        cell8.textContent = row.farge;
        cell9.textContent = row.blomst;
        cell10.textContent = row.oyne;
        cell11.textContent = row.unikU;

        
        
        /*cell1.className = "tdedit";
        cell1.textContent = row.navn;
        cell2.className = "tdedit";
        cell2.textContent = row.element;
        cell3.className = "tdedit";
        cell3.textContent = row.unikE;
        cell4.className = "tdedit";
        cell4.textContent = row.attack;
        cell5.className = "tdedit";
        cell5.textContent = row.fart;
        cell6.className = "tdedit";
        cell6.textContent = row.bere;
        cell7.className = "tdedit";
        cell7.textContent = row.forst;
        cell8.className = "tdedit";
        cell8.textContent = row.farge;
        cell9.className = "tdedit";
        cell9.textContent = row.blomst;
        cell10.className = "tdedit";
        cell10.textContent = row.oyne;
        cell11.className = "tdedit";
        cell11.textContent = row.unikU;
        cell12.className = "deleteknapp";
        cell12.textContent = "Delete";*/


        cell12.textContent = "Delete";
        cell12.className = "deleteknapp";

        const wawawa = newRow.getElementsByTagName("td");
        console.log(wawawa)
        editellerno(wawawa)
    });
}

function editellerno(wawawa){
        wawawa.forEach((td) => {
            td.className = "tdedit"
        });
}
 
rebuildTable(JSON.parse(retrievedData)); // kjør funksjon rebuild table med data fra localstorage
 




var table = document.querySelector("tbody")
var save_button = document.querySelector("#save")
var inputs = document.querySelectorAll("input[type='text']")

var delete_buttons = document.getElementsByClassName("deleteknapp")

var tr_buttons = document.getElementsByClassName("trer")


console.log(inputs)

for(var i = 0; i < delete_buttons.length; i++){
    delete_buttons[i].addEventListener("click", delete_function);
}


for(var a = 0; a < tr_buttons.length; a++){
    tr_buttons[a].addEventListener("click", replace_function);
}


function save_function(){
    tr = "<tr class='trer'>"
    
    inputs.forEach(
        function(node, index){
        console.log(node.value)
        tr += "<td class='tdedit'>" + node.value + "</td>"
        }
    )
    tr += "<td class='deleteknapp'>Delete</td></tr>"
    table.innerHTML += tr

    for(var a = 0; a < tr_buttons.length; a++){
        tr_buttons[a].addEventListener("click", replace_function);
    }
    for(var i = 0; i < delete_buttons.length; i++){
        delete_buttons[i].addEventListener("click", delete_function);
    }

    console.log("klikkeklikke")

    savetheTable()
}

save_button.addEventListener("click", save_function)





function delete_function(){
    this.parentNode.remove()
}



function replace_function(){
    if (this.className == "trer"){
        this.className = "getEdit"
        this.childNodes.forEach(
            function(node){
            if (node.className == "tdedit"){
                node.innerHTML = "<input type='text' class='replaceInput' value='"+node.innerHTML+"'>"

                console.log("OI " + node.innerHTML)
            }
            })
            document.addEventListener("keyup", function(press) {
                if (press.code === 'Enter'){replace_complete()}
            })
    }

    console.log("DU KLIKKET!!!" + this.childNodes)
}


function replace_complete(){
    var the_replacers = document.getElementsByClassName("getEdit")
    for(var r = 0; r < the_replacers.length; r++){
        the_replacers[r].childNodes.forEach(
            function(node){
                if (node.className == "tdedit"){
                    node.innerHTML = node.childNodes[0].value
                }}
        )
        the_replacers[r].className = "trer"
    }

    console.log("get replaced bro!")
    savetheTable()
}


function readTable() {
    const tableSave = document.getElementById('pikmin').getElementsByTagName('tbody')[0];
    const rows = tableSave.getElementsByTagName('tr');
    const data = [];
   
    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        const rowData = {};
        console.log(cells)
        rowData.navn = cells[0].textContent;
        rowData.element = cells[1].textContent;
        rowData.unikE = cells[2].textContent;
        rowData.attack = cells[3].textContent;
        rowData.fart = cells[4].textContent;
        rowData.bere = cells[5].textContent;
        rowData.forst = cells[6].textContent;
        rowData.farge = cells[7].textContent;
        rowData.blomst = cells[8].textContent;
        rowData.oyne = cells[9].textContent;
        rowData.unikU = cells[10].textContent;
        data.push(rowData);
    }
    return data;
}
   
function savetheTable(){
const tableData = readTable(); 
localStorage.setItem('tableData', JSON.stringify(tableData));
}