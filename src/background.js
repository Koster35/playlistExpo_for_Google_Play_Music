/*
@app playlistExpo for Google Play Music™
@author Maxwell L Koster

Background script to show page action.
*/
chrome.tabs.onUpdated.addListener(function (tabId, data, tab) {
	if (tab.url.includes("https://play.google.com/music/")) {
		chrome.pageAction.show(tabId);
	}
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request && request.action === "Scroll") {
		console.log(request.action);
		
		/*chrome.windows.getLastFocused(
    		{populate: false}, 
    		function(currentWindow) {
        		chrome.windows.update(currentWindow.id, { height: request.height });
    		}
		);*/
        	chrome.tabs.executeScript({
        		code: 'window.scrollBy(0, 1000);'
        	});
	console.log("background.js got a message")
	console.log(request);
    console.log(sender);
  	sendResponse("Scrolled");
  }
});