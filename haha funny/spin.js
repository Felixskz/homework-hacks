SPEED = 1
element = document.getElementsByClassName(prompt("element class:"))[0]
function delay(ms) {
    return new Promise(resolve => {
        setTimeout(() => {resolve('') }, ms);
    });
}
for (var i = 0; i < Number.MAX_VALUE; i++) {
    element.style.setProperty("transform", "rotate("+i*SPEED+"deg)")
    await delay(1)
}
