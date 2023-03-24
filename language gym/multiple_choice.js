function click(element) {
    element.click();
}
var answers = document.getElementsByClassName("word  answer");
answers = Array.prototype.slice.call(answers);
var moreanswers = document.getElementsByClassName("word");
moreanswers = Array.prototype.slice.call(moreanswers).filter(word => word.getAttribute("data-answer") == "correct");
Array.prototype.push.apply(answers, moreanswers);

console.log(answers)

answers.forEach(click);
