GymGame.hasTimer = false;
function delay(ms) {
    return new Promise(resolve => {
        setTimeout(() => {resolve('') }, ms);
    });
}
while (true) {
    var question = document.getElementById("verb-trainer-inputanswer");
    var answer = question.getAttribute("data-answer");
    question.value = answer;
    var nextButton = document.getElementById("check-answer");
    nextButton.click();
    await delay(300);
}
