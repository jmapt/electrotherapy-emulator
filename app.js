let currentModal;
let id;
let iftModal;
var span = document.getElementsByClassName('close');

// When the user clicks the button, open the modal
document.getElementById('btnIFT').onclick = function() {
	currentModal = document.getElementById('modalIFT');
	currentModal.style.display = 'block';

	reset_form();
};

// document.getElementById('btnStim1').onclick = function() {
// 	currentModal = document.getElementById('modalStim1');
// 	currentModal.style.display = 'block';

// 	reset_form();
// };

// document.getElementById('btnStim2').onclick = function() {
// 	currentModal = document.getElementById('modalStim2');
// 	currentModal.style.display = 'block';

// 	reset_form();
// };

document.getElementById('btnUltrasound').onclick = function() {
	currentModal = document.getElementById('modalUltrasound');
	currentModal.style.display = 'block';

	reset_form();
};

document.getElementById('btnTENS').onclick = function() {
	currentModal = document.getElementById('modalTENS');
	currentModal.style.display = 'block';

	reset_form();
};

// When the user clicks on <span> (x), close the modal
document.getElementById('modalIFTClose').onclick = function() {
	// currentModal.style.display = "none";
	// currentModal.getElementsByClassName("choices")[0].style.display = "block";
	// currentModal.getElementsByClassName("summary")[0].style.display = "none";
	reset_page();
};

document.getElementById('modalStim1Close').onclick = function() {
	// currentModal.style.display = "none";
	// currentModal.getElementsByClassName("choices")[0].style.display = "block";
	// currentModal.getElementsByClassName("summary")[0].style.display = "none";
	reset_page();
};

document.getElementById('modalStim2Close').onclick = function() {
	reset_page();
};

document.getElementById('modalUltrasoundClose').onclick = function() {
	reset_page();
};

document.getElementById('modalTENSClose').onclick = function() {
	reset_page();
};

document.getElementById('modalIFTClose').onclick = function() {
	reset_page();
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == currentModal) {
		// currentModal.style.display = "none";
		// currentModal.getElementsByClassName("choices")[0].style.display = "block";
		// currentModal.getElementsByClassName("summary")[0].style.display = "none";
		reset_page();
	}
};

function reset_page() {
	currentModal.style.display = 'none';
	currentModal.getElementsByClassName('choices')[0].style.display = 'block';
	currentModal.getElementsByClassName('summary')[0].style.display = 'none';

	reset_form();
}

function reset_form() {
	currentModal.getElementsByTagName('form')[0].reset();
	rangesToReset = currentModal.getElementsByClassName('range-display');
	for (i = 0; i < rangesToReset.length; i++) {
		rangesToReset[i].innerHTML = '0';
	}

	document.getElementById('ultrasound-intensity-units').innerHTML = 'W/cm2';
	document.getElementById('ultrasound-intensity-units-sum').innerHTML = 'W/cm2';
}

function showSummary() {
	currentModal.getElementsByClassName('choices')[0].style.display = 'none';
	currentModal.getElementsByClassName('summary')[0].style.display = 'block';

	var selectEntries = currentModal.getElementsByClassName('select-entry');
	var selectResults = currentModal.getElementsByClassName('select-result');

	for (i = 0; i < selectResults.length; i++) {
		selectResults[i].innerHTML = selectEntries[i].options[selectEntries[i].selectedIndex].text;
	}

	var valueEntries = currentModal.getElementsByClassName('value-entry');
	var valueResults = currentModal.getElementsByClassName('value-result');

	for (i = 0; i < valueResults.length; i++) {
		valueResults[i].innerHTML = valueEntries[i].value;
	}

	// var textareaEntries = currentModal.getElementsByClassName("textarea-entry");
	// var textareaResults = currentModal.getElementsByClassName("textarea-result");

	// for (i = 0; i < textareaResults.length; i++){
	//     textareaResults[i].innerHTML = textareaEntries[i].value;
	// }
}

// function updateRange() {
// 	document.getElementById('stim2-range-display').innerHTML = document.getElementById('stim2-range').value;
// }

// document.getElementById('stim2-range').addEventListener('input', updateRange);

function updateIntensityUnits() {
	intensity = document.getElementById('ultrasound-display');
	document.getElementById('ultrasound-intensity-units').innerHTML = intensity.options[intensity.selectedIndex].text;
	document.getElementById('ultrasound-intensity-units-sum').innerHTML =
		intensity.options[intensity.selectedIndex].text;
}

document.getElementById('ultrasound-display').addEventListener('input', updateIntensityUnits);

function poleChoice() {
	choice = document.getElementById('pole-choice');
	poleNo = choice.options[choice.selectedIndex].text;

	if (poleNo === 'Two') {
		previousModal = currentModal;
		currentModal = document.getElementById('modalStim1');
		previousModal.style.display = 'none';
		currentModal.style.display = 'block';
		reset_form();
	} else if (poleNo === 'Four') {
		previousModal = currentModal;
		currentModal = document.getElementById('modalStim2');
		previousModal.style.display = 'none';
		currentModal.style.display = 'block';
		reset_form();
	}
}
