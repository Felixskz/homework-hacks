var questions = document.getElementsByClassName("input-word apostrophe-answer")
for (var i = 0; i<questions.length; i++) {
    var q = questions[i];
    var a = q.getAttribute("data-answer");
    q.value = a;
    q.className = "input-word apostrophe-answer answered";
    console.log(q);
}
