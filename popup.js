/*
@app playlistExpo for Google Play Music™
@author Maxwell L Koster

JavaScript for popup.html.
*/
function execContentScript() {
	  chrome.tabs.executeScript({
	    file: 'content_script.js'
	  }); 
}

$( document ).ready($("#popup_button").click(execContentScript));