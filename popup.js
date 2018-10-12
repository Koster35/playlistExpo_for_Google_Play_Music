/*
@app playlistExpo for Google Play Music&trade;
@author Maxwell L Koster

JavaScript for popup.html.
*/
function execContentScript() {
	  chrome.tabs.executeScript({
	    file: 'content_script.js'
	  }); 
	}

$("#popup_button").click(execContentScript);