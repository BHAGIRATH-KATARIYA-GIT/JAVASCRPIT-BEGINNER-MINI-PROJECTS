let BASEURL = 'https://raw.githubusercontent.com/WoXy-Sensei/currency-api/main/api'

const dropdowns = document.querySelectorAll('.dropbox select')
const btn = document.querySelector('button')
const amountval = document.querySelector('#amount-value')

let fromCurr = document.querySelector('.from select')
let toCurr = document.querySelector('.to select')

for(let select of dropdowns){
    for(let codes in countryList){
        let newOption = document.createElement('option')
        newOption.innerText = codes;
        newOption.value = codes;
        if(select.name === 'from' && codes === 'USD'){
            newOption.selected = 'selected';
        }
        if(select.name === 'to' && codes === 'INR'){
            newOption.selected = 'selected';
        }
        select.append(newOption);
    }

    select.addEventListener('change' , (e) => {
        updateFlag(e.target);
    })
}

const updateFlag = (element) => {
    let currCode = element.value;
    let contryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${contryCode}/flat/64.png`
    let img = element.parentElement.querySelector('img')

    img.src = newSrc;
    console.log(currCode);
    
    
}


// /INR_USD.json'


btn.addEventListener('click' ,async (e) => {
    e.preventDefault();
    let amount = document.querySelector('#amount-value')
    let amtval = document.querySelector('#amount-value').value;
    if(amtval === '' || amtval < 1){
        amount.value = 1;
    }

    const URL = `${BASEURL}/${fromCurr.value}_${toCurr.value}.json`;

    let response = await fetch(URL);
    let data = await response.json();
    // let rate = data[fromCurr.value]
    console.log(data.rate);
     
    // console.log(object.rate);
    
    
})