const wordsContainer = document.querySelector(".words");
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let paragraph = document.createElement("p");
wordsContainer.appendChild(paragraph);

recognition.addEventListener("result", (e) => {
	const transcript = [...e.results]
		.map((result) => result[0])
		.map((result) => result.transcript)
		.join("");

	paragraph.textContent = transcript;

	if (e.results[0].isFinal) {
		paragraph = document.createElement("p");
		wordsContainer.appendChild(paragraph);
	}
});

recognition.addEventListener("end", recognition.start);

recognition.start();
