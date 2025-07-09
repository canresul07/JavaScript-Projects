

const decreaseButton = document.getElementById("decreaseButton");
const resetButton = document.getElementById("resetButton");
const increaseButton = document.getElementById("increaseButton");
const countlabel = document.getElementById("countLabel")

let count = 0;

increaseButton.onclick = function(){

    count++;
    countlabel.textContent = count;
}

decreaseButton.onclick = function(){

    count--;
    countlabel.textContent = count;
}

resetButton.onclick = function(){

    count = 0;
    countlabel.textContent = count;
}