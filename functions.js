'use strict'

//check jquery has been loaded and its working
$(document).ready(function(){
    console.log("Jquery y la web cargados");
});


//add to list function
//creates a li and adds it to the ul
//takes filling as a parameter
function addToList()
{
    //take input from text box "tasklist"
    var filling = document.getElementById("tasklist").value;
    //check input is not empty and valid
    if (filling == null ||
        filling == undefined ||
        filling.length == 0  ) {
        alert("Please write something before adding it to the list");
        return -1;
    }
    var newNode = document.createElement("li");
    newNode.className = "list-group-item";
    newNode.id = filling;
    var content = document.createTextNode(filling);
    newNode.appendChild(content);
    var element = document.getElementById("olist");
    element.appendChild(newNode);
    document.getElementById("tasklist").value = "";
}

function deleteFromList()
{
    //get input from deleteItem text box
    var deleteFilling = document.getElementById("deleteItem").value;
    //check input from text box is valid and non empty
    if (deleteFilling == null ||
        deleteFilling == undefined ||
        deleteFilling.length == 0  ) 
    {
        alert("Please write something before removing it from the list");
        return -1;
    }
    //check if input is within the existent tasks
    var index = 0;
    var found = false;
    var lis = document.getElementsByTagName("li");
    for (let index = 0; index < lis.length; index++) {
        if (lis[index].textContent == deleteFilling) {
            console.log("Coincidence found!");
            found = true;
        }
        else{
            document.getElementById("deleteItem").value = "";
            alert("Please enter an existent task to delete");         
            return -1;
        }
    }
    //delete node with selected task
    var node = document.getElementById(deleteFilling);
    node.parentNode.removeChild(node);
    document.getElementById("deleteItem").value = "";
}

function searchList(){
    var deleteFilling = document.getElementById("deleteItem").value;
    var index = 0;
    var found = false;
    var lis = document.getElementsByTagName("li");
    for (let index = 0; index < lis.length; index++) {
        // console.log(lis[index].textContent);
        if (lis[index].textContent == deleteFilling) {
            console.log("Coincidence found!");
            found = true;
        }
        else{
            alert("Pleas enter an existent task to delete");         
            return -1;
        }
    }
}