"use strict"
let input=document.getElementsByTagName("input")[0];
let buttons=document.getElementsByTagName("button")[0];
let del=document.getElementById("delete");
let clear=document.getElementById("clear");
let tableBody=document.getElementById("tableBody");

let index=0;
const add_task=()=>{

    let item=input.value.trim();
    // var desc=input.value;
    if (item.trim() !== "") {
        localStorage.setItem(index,input.value);
        
        
        let html=`<table border="1">
        <thead>
    
        <th id="id">ID</th>
        <th id="description">Description</th>
        <th id="delete">Delete</th>
        </thead>
        
        <tbody id="tablebody">
        <tr>
        <td id="id">${index}</td>
        <td id="id"></td>
        <td id="description">${input.value}</td>
        <td id="delete">
        <i class="fas fa-times" id="delete"></i>
        </td>
            </tr>
            
        
            </tbody>
            
            </table> `
            index++;
            
        }
    table.innerHTML=html;
            
    input.value="";
            
}







if (buttons) {
    buttons.addEventListener("click", add_task);
}

const clearall=()=>{

    localStorage.clear();
}

clear.addEventListener("click",clearall);


const delete_task=()=>{
    localStorage.key()
    localStorage.removeItem(1);
}
del.addEventListener("click",delete_task);





// "use strict";

// let input = document.getElementsByTagName("input")[0];
// let buttons = document.getElementsByTagName("button")[0];
// let del = document.getElementById("delete");
// let edit = document.getElementById("edit");

// let index = 0;

// const add_task = () => {
//     let item = input.value.trim();
//     if (item !== "") {
//         localStorage.setItem(index, item);
//         index++;
//         // Optionally, you might want to display the tasks or perform other actions here.
//         console.log("Task added:", item);
//     }
//     input.value = "";
// };

// const delete_task = () => {
//     // Specify the key you want to remove (for example, 0)
//     localStorage.removeItem(0);
// };

// if (buttons) {
//     buttons.addEventListener("click", add_task);
// }

// if (del) {
//     del.addEventListener("click", delete_task);
// }
