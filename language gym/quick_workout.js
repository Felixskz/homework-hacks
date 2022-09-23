var score = document.getElementsByClassName("total-correct")[0].innerHTML;
var total = document.getElementsByClassName("d-inline-block float-right")[0];
var totalNumber = '';
for (var char of total.innerHTML.substring(total.innerHTML.indexOf("/ ") + 2)) {
    console.log("char:",char);
    if (isNaN(char)) {
        break;
    } else {
        totalNumber = totalNumber.concat(char);
    }
    console.log("total:",totalNumber);
}
for (var i = 0; i < totalNumber-score; i++){
    GymGame.addCorrect();
}
