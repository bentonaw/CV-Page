// Cursor effects
const blob = document.getElementById("blob");
const eegg = document.getElementById("eegg");
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
});

if (window.location.href.includes("About.html")) {
	eegg.addEventListener("click", function (e) {
		blob.style.background =
			"linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)";
	});
}

if (window.location.href.includes("Index.html")) {
	let pressedKeys = ""; // Initializing the variable

	const messages = [
		"Hack detected!",
		"Unauthorized access!",
		"Security breach!",
		"Alert: suspicious activity detected!",
		"Well, I’ve had enough nonsense. I’m going home!",
		"It would be so nice if something made sense for a change.",
	];

	window.addEventListener("keyup", (e) => {
		pressedKeys += e.key;
		console.log(pressedKeys); // Check the value of pressedKeys in the console
		pressedKeys = pressedKeys.slice(-4);
		if (pressedKeys === "1337") {
			const randomIndex = Math.floor(Math.random() * messages.length);
			const randomMessage = messages[randomIndex];
			alert(randomMessage);
		}
	});
}
