var textboxes = document.getElementsByClassName("form-control single-letter apostrophe-input")
for (i =0;i<textboxes.length;i++){
    textbox=textboxes[i];
    var answer = textbox.getAttribute("data-cor")
    textbox.value = answer;
}
//spam return
