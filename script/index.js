
const inputBox = document.getElementById("input-field");
const displayItem = document.getElementById("display-text");
const button = document.getElementById("button");
const listContainer = document.getElementById("list-container");

button.addEventListener("click", function(){
    const inputValue = inputBox.value;

    if(inputValue !== ""){
         // create li 
        const li = document.createElement("li");
        const divContainer = document.createElement("div");
        divContainer.classList.add("check-box");
        divContainer.innerHTML = `<i id="check-icon" class="fa-solid fa-check"></i>`;
        li.appendChild(divContainer);


        const span = document.createElement("span");
        span.classList.add("display");
        span.innerText = inputValue;
        li.appendChild(span);


        const p = document.createElement("p");
        p.classList.add("remove-box")
        p.innerText = "x";
        li.appendChild(p)


        // to remove the element from the li list

        li.classList.add("list-item")
        listContainer.appendChild(li);
        inputBox.value = "";
    }else{
        alert("please type a text!")
    }
   
}, false)

const listBox = document.querySelectorAll(".ul-box");

for(const item of listBox){
    item.addEventListener("click", function(e){
        const parent = e.target.parentNode;
        parent.remove();
    })
}