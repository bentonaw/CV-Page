// Cursor effects
const blob = document.getElementById("blob");
let lastMouseX = 0;
let lastMouseY = 0;

document.addEventListener("mousemove", function (e) {
    var mouseX = e.clientX;
    var mouseY = e.clientY;

    // Check if mouseX or mouseY is null, if so, use the last recorded position
    mouseX = mouseX || lastMouseX;
    mouseY = mouseY || lastMouseY;

    if (blob) {
        blob.style.left = mouseX + "px";
        blob.style.top = mouseY + "px";
    }

    // Update lastMouseX and lastMouseY
    lastMouseX = mouseX;
    lastMouseY = mouseY;
})


