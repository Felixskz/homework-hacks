var questions = document.getElementsByClassName("input-word apostrophe-answer")
for (var i = 0; i<questions.length; i++) {
    var q = questions[i];
    var a = q.getAttribute("data-answer");
    q.value = a;
    q.className = "input-word apostrophe-answer answered";
    console.log(q);
}
var questions = document.getElementsByClassName("question-answerwrap")
for (var i = 0; i<questions.length; i++) {
    for (var mySpan of questions[i].children) {
        var a = mySpan.getAttribute("data-answer");
        if (a == "correct") {
            console.log("span:", mySpan, "a:", a);
            GymGame.addCorrect();
            mySpan.classList.add("answered");
            mySpan.classList.add("answer-correct");
    
            questions[i].classList.add('answered');
        }
    }
}
