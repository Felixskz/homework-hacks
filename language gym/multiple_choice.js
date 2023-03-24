function click(element) {
    element.click();
}
var answers = document.getElementsByClassName("word  answer")
answers = Array.prototype.slice.call(answers)
answers.forEach(click)
