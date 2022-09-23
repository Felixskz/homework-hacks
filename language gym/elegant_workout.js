var questions = document.getElementsByClassName("input-word apostrophe-answer")
for (var i = 0; i<questions.length; i++) {
    var q = questions[i];
    var a = q.getAttribute("data-answer");
    q.value = a;
    q.className = "input-word apostrophe-answer answered";
    console.log(q);
}
var questions = document.getElementsByClassName("question-answerwrap")
for (var question of questions) {
    for (var mySpan of question.children) {
        var a = mySpan.getAttribute("data-answer");
        if (a == "correct") {
            console.log("span:", mySpan, "a:", a);
            GymGame.addCorrect();
            mySpan.classList.add("answered");
            mySpan.classList.add("answer-correct");
    
            question.classList.add('answered');
        }
    }
}
var elements = document.getElementsByClassName("shuffle-children randomize-span")[0].children;
var lists = document.getElementsByClassName("list-answered");
for (var element of elements) {
    element.classList.add("selected");
    element.classList.add("ui-draggable-dragging");
    lists[element.getAttribute("data-list")].appendChild(element);
}
