'use strict'

function addToList(){
    var filling = document.getElementById("tasklist").value;
    if (document.getElementById("tasklist").value == null ||
        document.getElementById("tasklist").value == undefined ||
        document.getElementById("tasklist").value.length == 0  ) {
        alert("Please write something before adding it to the list");
        return -1;
    }
    var newNode = document.createElement("li");
    newNode.className = "list-group-item";
    var content = document.createTextNode(filling);
    newNode.appendChild(content);
    var element = document.getElementById("olist");
    element.appendChild(newNode);
    document.getElementById("tasklist").value = '';
}