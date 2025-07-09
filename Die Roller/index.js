

const myButton = document.getElementById("randomButton");
const label1 = document.getElementById("label1");
const min = 1;
const max = 6;
let randomNum;

myButton.onclick = function(){

    randomNum = Math.floor(Math.random() * max) + min;
    label1.textContent = randomNum;

}