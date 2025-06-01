let value = document.querySelector('#counter-value')
let dec = document.querySelector('#decrease')
let reset = document.querySelector('#reset')
let inc = document.querySelector('#increase')


let count = 0;


function textColor(count){
    if(count > 0) {
        value.style.color = 'green';
    }else if(count < 0) value.style.color = 'black';
    else value.style.color = 'white'
}

dec.addEventListener('click' , (e) => {
         value.innerHTML = --count; 
         textColor(count);
})

reset.addEventListener('click' , (e) => {
    count = 0
    value.innerHTML = count;
    textColor(count);

})


inc.addEventListener('click' , (e) => {
    value.innerHTML = ++count;
    textColor(count);

})