$("popup-button").click(function () {	
	 chrome.tabs.executeScript(null, {file: "content_script.js"});
});