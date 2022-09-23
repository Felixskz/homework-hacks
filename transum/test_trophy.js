function checkAnswers() {
    score = prompt("What would you like your score to be?", document.getElementsByClassName("Answer_box").length);
    $('#Trophybutton').show();
    $('#Trophybutton').val('Free Trophy');
    $('#Checkbutton').hide();
}
