function execContentScript() {
	  chrome.tabs.executeScript({
	    file: 'content_script.js'
	  }); 
	}

document.getElementById('popup_button').addEventListener('click', execContentScript);