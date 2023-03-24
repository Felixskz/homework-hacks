function click(element) {
    element.click();
}
var answers = document.getElementsByClassName("word  answer") // sometimes the class name is not "word  answer" if it is instead for example "correct" just change it
answers = Array.prototype.slice.call(answers)
answers.forEach(click)
