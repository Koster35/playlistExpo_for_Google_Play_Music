/*
@app playlistExpo for Google Play Music™
@author Maxwell L Koster

JavaScript for popup.html.
*/
function execContentScript() {
	  chrome.tabs.executeScript({
	    file: 'content.js'
	  }); 
}

$( document ).ready($("#popup_button").click(execContentScript));
$(document).ready(function(){
   $('body').on('click', 'a', function(){
     chrome.tabs.create({url: $(this).attr('href')});
     return false;
   });
});