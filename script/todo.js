
function addListItem(){
    displayListItem("list-container");
}

function takeInputValue(idName){
    const inputElement = document.getElementById(idName);
    const inputInnerValue = inputElement.value;
   
    return inputInnerValue;
}

function displayListItem(idName){
    const inputValue = takeInputValue("input-container");
    const displayElement = document.getElementById(idName);

    if(inputValue === ""){
        // const audio = new Audio();
        // audio.src = "audio/selected.mp3"
        // audio.play();
        alert("Please type somthing before add");
    }else{
    const div = document.createElement("div");
    div.setAttribute("id", "div-list-container")
    div.classList.add("div-list-container")

    const button1 = document.createElement("button");
    button1.setAttribute("id", "button1");

    const span = document.createElement("span");
    span.innerText = 0;
    span.setAttribute("id", "span-container")

    const button2 = document.createElement("button");
    button2.setAttribute("id", "button2")
    

    const p = document.createElement("p");
    p.innerText = inputValue;

    div.appendChild(button1);
    div.appendChild(span)
    div.appendChild(p); 
    div.appendChild(button2); 
    displayElement.appendChild(div); 

    document.getElementById("input-container").value = "";

    }
}


const inputContainer = document.getElementById("input-container");
inputContainer.addEventListener("keyup", (e) => {
    if(e.key === "Enter"){
        addListItem();
        increasingNumber("span-container");
    }
})


function toRemoveElement(){
    const button2Container = document.getElementById("list-container");

    button2Container.addEventListener("click", (e) => {
        if(e.target.id === "button2"){
            e.target.parentNode.remove()
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
    })  
    
}

toRemoveElement()


function increasingNumber(idName){
    const spanContainer = document.getElementById(idName);

    const spanInnerText = spanContainer.innerText;
    const innerValue = parseInt(spanInnerText);

    const value = innerValue + 1;
    spanContainer.innerText = value;

    // span.innerText = 1;
    // const span1 = document.createElement("span");
    // span1.innerText = ".";
    // span.appendChild(span1)

}

