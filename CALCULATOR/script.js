const display = document.querySelector("#display");
const point = document.querySelector("#point");
const btn = document.querySelectorAll('button:not(#clear-all)');
const operators = document.querySelectorAll('.operator');
console.log(btn);

let isZeroInStart = true;


function handleNumber(e) {

  

  if (isZeroInStart) {
    display.innerHTML = "";
    isZeroInStart = false;
  }

  console.log(e.target.innerHTML);
  display.innerHTML += e.target.innerHTML;

  if (e.target.innerHTML === ".") {
    point.disabled = true;
  }
}

function handleAnswer(e) {
  let ans = eval(display.innerHTML)
  display.innerHTML = ans;

  btn.forEach((btn) => {
    btn.setAttribute('disabled' , '');
  })

}




function handleClearAll(e) {
  display.innerHTML = 0;
  isZeroInStart = true;
  btn.forEach((btn) => {
    btn.removeAttribute('disabled' , '');
  })
}



function handleClearOne(e) {
  let inputStr = display.innerHTML;

  // Remove Last Number
  // display.innerHTML = inputStr.slice(0 , inputStr.length - 1)
  display.innerHTML = inputStr.slice(0, -1);

  // if input empty display 0
  if (display.innerHTML === "") {
    display.innerHTML = 0;
    isZeroInStart = true;
  }

  //handle Decimal Point
  if (!display.innerHTML.includes(".")) {
    point.disabled = false;
  }
}


