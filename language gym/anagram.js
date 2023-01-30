//doesnt work very well

var textboxes = document.getElementsByClassName("hint-answer text-center apostrophe-input")
undefined
for (i =0;i<textboxes.length;i++){
    textbox=textboxes[i];
    var answer = textbox.getAttribute("data-answer")
    textbox.value = answer;
    textbox.class = "hint-answer text-center apostrophe-input correct-answer"
}
