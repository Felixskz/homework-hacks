var leftHalf = document.getElementsByClassName("col-6 col-sm-6 list-left")[0]
var rightHalf = document.getElementsByClassName("col-6 col-sm-6 list-right")[0]
var colors = ['red', 'blue', 'green', 'yellow', 'pink', 'orange', 'white', 'purple', 'gray', 'cyan']

var left = leftHalf.children
var right = rightHalf.children

var length = left.length

colors = colors.slice(0, length-1)

for (var i = 0; i < length; i++) {
    var leftItem = left[i]
    var rightItem = right[i]
    
    leftItem.style.backgroundColor = colors[leftItem.getAttribute('data-couple')];
    rightItem.style.backgroundColor = colors[rightItem.getAttribute('data-couple')];
}

// i can't work out how to auto drag the stuff so uh this is the best ur gonna get

// complet
