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