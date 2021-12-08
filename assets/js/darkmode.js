setTheme(checkSetting());

function deleteSettings() {
	console.log("Deleted Data");
	localStorage.removeItem("isDarkMode");
	setTheme("false");
}

function checkSetting() {
	const isDarkMode = localStorage.getItem("isDarkMode");

	if (isDarkMode == null) {
		localStorage.setItem("isDarkMode", "false");
		return "false";
	} else {
		return isDarkMode;
	}
}

function setTheme(isDarkMode) {
	console.log(isDarkMode);
	if (isDarkMode == "true") {
		darkmode.setDarkMode(true);
	} else {
		darkmode.setDarkMode(false);
	}
}

function toggleDarkMode() {
	const result = checkSetting();
	const button = document.getElementById("darkModeButton");

	if (result == "true") {
		localStorage.setItem("isDarkMode", "false");
		setTheme("false");
		button.innerText = "Turn On";
		button.classList.remove("btn-danger");
		button.classList.add("btn-success");
	} else {
		localStorage.setItem("isDarkMode", "true");
		setTheme("true");
		button.innerText = "Turn Off";
		button.classList.remove("btn-success");
		button.classList.add("btn-danger");
	}
}
