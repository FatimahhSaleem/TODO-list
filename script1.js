"use strict"


let input = document.getElementById("input");
let btn = document.getElementById("add");
let tableData = document.getElementById("table_data");
let clearAll=document.getElementById("clear");

let i = 1;

const add = () => {
    if (input.value.trim() !== "") {
        // Save the task to localStorage
        localStorage.setItem(i, input.value);

        // Create a new table row
        let newRow = document.createElement("tr");

        // Set the inner HTML for the new row
        newRow.innerHTML = `
            <td id="id"><i class="fas fa-code"></i></td>
            <td id="description">${input.value}</td>
            <td id="delete">
                <i class="fas fa-times delete" data-index="${i}"></i>
            </td>
        `;

        // Append the new row to the table
        tableData.appendChild(newRow);
        let deleteButton = newRow.querySelector(".delete");
        deleteButton.addEventListener("click", deleteTask);
        
        
        i++;
        input.value = "";
    }
};

const deleteTask = (event) => {
    // Get the index of the task to be deleted from the data-index attribute
    let index = event.target.dataset.index;
    
    localStorage.removeItem(index);

    let rowToRemove = event.target.closest("tr");
    rowToRemove.remove();
    

};




const clearToDo=()=>{

    tableData.innerHTML="";
    localStorage.clear();
    

}

btn.addEventListener("click", add);
// Add event listener for the delete button in the new row

clearAll.addEventListener("click",clearToDo);


