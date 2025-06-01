const text = document.getElementById("text");
const btn = document.querySelector("#addTask");
let i = 0;
btn.addEventListener('click',()=>{
    // console.log(text.value);
    if (text.value === '') {
        alert("ENTER A CORRECT VALUE");
    }else{
    const el = document.createElement("li");
    el.className = "task";
    const addtext = document.createTextNode(text.value);
    el.appendChild(addtext);
    document.querySelector("ul").appendChild(el);
    cancelbtn(i);
    text.value = '';
    activeCanBtn();
    i++;
    }
});
cancelbtn = (i) => {
    const cancelbtn = document.createElement("button"); 
    const addtext = document.createTextNode("Cancel");
    cancelbtn.className = "removeTask";
    cancelbtn.appendChild(addtext);
    document.getElementsByClassName("task")[i].appendChild(cancelbtn); 
};


