'use strict'

//check jquery has been loaded and its working
$(document).ready(function () {
    console.log("Jquery y la web cargados");
    //take enter as press addToList button
    $("#tasklist").keypress(function (e) {
        if (e.which == 13) {
            addToList();
        }
    });
    // take enter as press deleteFromList button      
      $("#deleteItem").keypress(function(e) {
        if(e.which == 13) {
          deleteFromList();
        }
      });
    // list items can be sorted
      $(".list-group").sortable();
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
        filling.length == 0) 
        {
        document.getElementById("addText").innerHTML = "Please write something before adding it to the list";
        $("#addText").css("display", "block")
        return -1;
    }
    var newNode = document.createElement("li");
    newNode.className = "list-group-item";
    newNode.id = filling;
    var content = document.createTextNode(filling);
    newNode.appendChild(content);
    var element = document.getElementById("olist");
    element.appendChild(newNode);
    $("#addText").css("display", "none")
    document.getElementById("tasklist").value = "";
}


//deletes node from list
//uses deleteFilling as parameter
function deleteFromList() 
{
    //get input from deleteItem text box
    var deleteFilling = document.getElementById("deleteItem").value;

    //store tasks in an array to make validations later
    var lis = document.getElementsByTagName("li");
    if (lis.length == 0) 
    {
        document.getElementById("deleteText").innerHTML = "There are no to-dos to delete";
        $("#deleteText").css("display", "block")
        return -1;
    }

    //check input from text box is valid and non empty
    else if (deleteFilling == null ||
        deleteFilling == undefined ||
        deleteFilling.length == 0) 
        {
        document.getElementById("deleteText").innerHTML = "Please write something before removing it from the list";
        $("#deleteText").css("display", "block")
        // alert("Please write something before removing it from the list");
        return -1;
    }
    //if there are nodes and input is valid
    else 
    {
        //check if input is within the existent tasks
        var index = 0;
        var found = false;
        for (let index = 0; index < lis.length; index++) {
            console.log("Index: " + index);
            console.log("Node: " + lis[index].textContent);
            console.log("Length: " + lis.length);
            if (lis[index].textContent == deleteFilling) {
                console.log("Coincidence found!: " + lis[index].textContent + " at position: " + index);
                //delete node with selected task
                var node = document.getElementById(deleteFilling);
                node.parentNode.removeChild(node);
                $("#deleteText").css("display", "none")
                document.getElementById("deleteItem").value = "";
                found = true;
            }   
        }
        //if no node was found with that name
        if (found == false)
        {
                document.getElementById("deleteItem").value = "";
                document.getElementById("deleteText").innerHTML = "Please enter an existent task to delete";
                $("#deleteText").css("display", "block")
                return -1;
        }
    }
}