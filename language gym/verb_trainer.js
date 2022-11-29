GymGame.timerNextSecond = Number.MAX_SAFE_INTEGER; // pauses timer
function delay(ms) {
    return new Promise(resolve => {
        setTimeout(() => {resolve('') }, ms);
    });
}
while (true) {
    var question = document.getElementById("verb-trainer-inputanswer"); // textbox
    var answer = question.getAttribute("data-answer"); // the answer
    question.value = answer;
    var nextButton = document.getElementById("check-answer");
    nextButton.click(); // clicks the button to get to the next question
    await delay(200);
}
