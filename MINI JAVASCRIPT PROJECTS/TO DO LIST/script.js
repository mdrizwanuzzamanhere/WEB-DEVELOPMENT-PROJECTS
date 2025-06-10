let inputs = document.getElementById("inputBox");
let text = document.querySelector(".todos");

function Add(){
    if(inputs.value == ""){
        alert("Please enter a task")
    }else{


        let el = document.createElement("ul"); 
      
        el.innerHTML = `${inputs.value} <button class="del">Delete</button>`;
        text.appendChild(el) ; 
        inputs.value = ""; 
        el.querySelector(".del").addEventListener("click" , remove);

        function remove(){
            el.remove() ; 
        }
    }
}