/*
@title GPM Playlist Exporter
@author Maxwell L Koster
*/
function execContentScript() {
	  chrome.tabs.executeScript({
	    file: 'content_script.js'
	  }); 
	}

document.getElementById('popup_button').addEventListener('click', execContentScript);