var questions = document.getElementsByClassName("question-container answerBox apostrophe-input");
for (var i = 0; i < questions.length; i++) {
    question = questions[i];
    var answer = question.getAttribute("data-translation"); // the answer
    question.value = answer;
}
