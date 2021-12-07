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

	if (result == "true") {
		localStorage.setItem("isDarkMode", "false");
		setTheme("false");
	} else {
		localStorage.setItem("isDarkMode", "true");
		setTheme("true");
	}
}
