// Hilfsfunktion zur Konvertierung
const convertNumber = (input, fromSystem) => {
	let decimalValue;
	if (fromSystem === "decimal") {
		decimalValue = parseInt(input, 10);
	} else if (fromSystem === "binary") {
		decimalValue = parseInt(input, 2);
	} else if (fromSystem === "hexadecimal") {
		decimalValue = parseInt(input, 16);
	}

	if (isNaN(decimalValue)) {
		alert("Ungültige Zahl oder Format. Bitte gültige Zahl eingeben.");
		return null;
	}

	return {
		decimal: decimalValue.toString(10),
		binary: decimalValue.toString(2),
		hexadecimal: decimalValue.toString(16).toUpperCase(),
	};
};

// Funktion zur Zeitmessung und Anzeige des Ergebnisses
const measureTimeAndDisplay = (
	inputId,
	systemId,
	resultDecimalId,
	resultBinaryId,
	resultHexId,
	resultSpeedId
) => {
	const input = document.getElementById(inputId).value;
	const fromSystem = document.getElementById(systemId).value;

	// Zeitmessung Start
	const startTime = performance.now();

	const result = convertNumber(input, fromSystem);

	// Zeitmessung Ende
	const endTime = performance.now();
	const executionTime = (endTime - startTime).toFixed(4); // Zeit in Millisekunden

	if (result) {
		document.getElementById(resultDecimalId).textContent = result.decimal;
		document.getElementById(resultBinaryId).textContent = result.binary;
		document.getElementById(resultHexId).textContent = result.hexadecimal;
		document.getElementById(
			resultSpeedId
		).textContent = `Berechnungszeit: ${executionTime} ms`;
	}
};

// Funktion zur Eingabe per Enter-Taste
const handleEnterKey = (
	event,
	inputId,
	systemId,
	resultDecimalId,
	resultBinaryId,
	resultHexId,
	resultSpeedId
) => {
	if (event.key === "Enter") {
		measureTimeAndDisplay(
			inputId,
			systemId,
			resultDecimalId,
			resultBinaryId,
			resultHexId,
			resultSpeedId
		);
	}
};

// Merge Sort Button
document.getElementById("merge-convert-btn").addEventListener("click", () => {
	measureTimeAndDisplay(
		"merge-input",
		"merge-system",
		"merge-decimal-result",
		"merge-binary-result",
		"merge-hexadecimal-result",
		"merge-speed"
	);
});

// Enter-Ereignis für Merge Sort
document.getElementById("merge-input").addEventListener("keydown", (event) => {
	handleEnterKey(
		event,
		"merge-input",
		"merge-system",
		"merge-decimal-result",
		"merge-binary-result",
		"merge-hexadecimal-result",
		"merge-speed"
	);
});

// Bubble Sort Button
document.getElementById("bubble-convert-btn").addEventListener("click", () => {
	measureTimeAndDisplay(
		"bubble-input",
		"bubble-system",
		"bubble-decimal-result",
		"bubble-binary-result",
		"bubble-hexadecimal-result",
		"bubble-speed"
	);
});

// Enter-Ereignis für Bubble Sort
document.getElementById("bubble-input").addEventListener("keydown", (event) => {
	handleEnterKey(
		event,
		"bubble-input",
		"bubble-system",
		"bubble-decimal-result",
		"bubble-binary-result",
		"bubble-hexadecimal-result",
		"bubble-speed"
	);
});

// Einfacher Konvertierungsalgorithmus Button
document.getElementById("simple-convert-btn").addEventListener("click", () => {
	measureTimeAndDisplay(
		"simple-input",
		"simple-system",
		"simple-decimal-result",
		"simple-binary-result",
		"simple-hexadecimal-result",
		"simple-speed"
	);
});

// Enter-Ereignis für Einfachen Konvertierungsalgorithmus
document.getElementById("simple-input").addEventListener("keydown", (event) => {
	handleEnterKey(
		event,
		"simple-input",
		"simple-system",
		"simple-decimal-result",
		"simple-binary-result",
		"simple-hexadecimal-result",
		"simple-speed"
	);
});
