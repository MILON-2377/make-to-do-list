
function addListItem(){
    displayListItem("list-container");
}

function takeInputValue(idName){
    const inputElement = document.getElementById(idName);
    const inputInnerValue = inputElement.value;
   
    return inputInnerValue;
}

let num = 0;
const listContainerArr = [];

function displayListItem(idName){
    const inputValue = takeInputValue("input-container");
    const displayElement = document.getElementById(idName);

    if(inputValue === ""){
        // const audio = new Audio();
        // audio.src = "audio/selected.mp3"
        // audio.play();
        alert("Please type somthing before add");
    }else{
    const div = makeElement("div");
    div.setAttribute("id", "div-list-container")
    div.classList.add("div-list-container")

    const button1 = makeElement("button");
    button1.setAttribute("id", "button1");

    const span = makeElement("span");
    const value = num + 1;
    span.innerText = `${value}.`;
    num = value;

    const button2 = makeElement("button");
    button2.setAttribute("id", "button2")
    

    const p = makeElement("p");
    p.innerText = inputValue;

    div.appendChild(button1);
   
    div.appendChild(span)
    div.appendChild(p); 
    div.appendChild(button2); 
    displayElement.appendChild(div); 

    document.getElementById("input-container").value = "";
    saveListContainerDataa();

    }
    console.log(listContainerArr);
}


function makeElement(elementName){
    const makeElentName = document.createElement(elementName);

    return makeElentName;
}

const inputContainer = document.getElementById("input-container");
inputContainer.addEventListener("keyup", (e) => {
    if(e.key === "Enter"){
        addListItem();
    }
})

const button2Container = document.getElementById("list-container");
function toRemoveElement(){

    button2Container.addEventListener("click", (e) => {
        if(e.target.id === "button2"){
            e.target.parentNode.remove();
            for(const item of listContainerArr){
                if(listContainerArr.includes(e.target.parentNode)){
                    const index = listContainerArr.indexOf(item);
                    listContainerArr.splice(index, 1);
                    
                }
            }
        }else if(e.target.id === "button1"){

            const audio1 = new Audio();
            audio1.src = "audio/selected22.mp3";
            audio1.play();

            const img = document.createElement("img");
            img.src = "images/checked.png"
            img.classList.add("img-box")
            img.setAttribute("id", "image-container")
            e.target.appendChild(img);
            e.target.style.border = "none"
            
        }else if(e.target.id === "image-container"){

            const audio = new Audio();
            audio.src = "audio/unselected.mp3";
            audio.play()

            e.target.classList.add("hidden");
            e.target.parentNode.style.border = "2px solid white"
            
        }

        saveListContainerDataa();
    })  
    
}

toRemoveElement()

function saveListContainerDataa(){
    localStorage.setItem("data", button2Container.innerHTML);
}

function getListContainerData(){
    const items =  localStorage.getItem("data");
    button2Container.innerHTML = items;
}

getListContainerData();