/*
@app playlistExpo for Google Play Music™
@author Maxwell L Koster

Main extension functionality.
*/

// Maps extracted rating integers to English strings.
var ratingMap = {
    '5' : "Like",
    '1': "Dislike",
    '0': "",
    'null': ""
};
// Appends file header and column headers to output String.
var csvContent = "data:text/csv;charset=utf-8,Index,Title,Duration,Artist,Album,Play-count,Rating\n"; 
// Scrolls to bottom of page
console.log($("tr.vl-placeholder:last-of-type").css("height").slice(0, -2));
//var windowHeight = parseInt($("tr.vl-placeholder:last-of-type").css("height").slice(0, -2));
/*
if (windowHeight > 0) {
	chrome.runtime.sendMessage({
    action: "Increase_Window_Height",
    height: windowHeight,
    function (response) {
    	console.log(response);
    }
});

}
*/

var playlistTitle = $("div.title-row > h2").text();
// Creates collection of all the span elements that will written to the output file.
var spanCells = $( "span" );
// Extracts data for each song (row) and appends to output String.
var songCount = $("table.song-table > tbody").attr("data-count");
var rowIndex = 0;/*
while (rowIndex < songCount) {
	$( "table.song-table tr.song-row" ).each(function() { 
		if (parseInt($(this).attr("data-index")) >= rowIndex) {
			rowIndex++;
			var colIndex = 0;
			// Appends span element contents, if contents exist, to the file string.
			$(this).find(spanCells).each(function () { 
				csvContent += "\"" + $(this).text() + "\",";
				colIndex++;
			});
			// Appends play-count "0", if no play-count span was found, to file string.
			if (colIndex == 5) {
				csvContent += "0,";
			}
			// Appends rating to file string.
			csvContent += ratingMap[$(this).find("[data-col='rating']").attr("data-rating")];
			csvContent += "\n";
		} else {
			chrome.runtime.sendMessage({
    			action: "Scroll",
    			function (response) {
    				console.log(response);
    			}
    		});
			var spanCells = $( "span" );
		}
	});
}
*/
			chrome.runtime.sendMessage({
    			action: "Scroll",
    			function (response) {
    				console.log(response);
    			}
    		});

    		//chrome.tabs.executeScript({ file: 'content_script.js', allFrames: false });
    		chrome.tabs.executeScript(tabs[0].id, {
        		code: 'window.scrollBy(0, 1000);'
        	});




$( "table.song-table tr.song-row" ).each(function() {
	var colIndex = 0;
	// Appends span element contents, if contents exist, to the file string.
	$(this).find(spanCells).each(function () { 
		csvContent += "\"" + $(this).text() + "\",";
		colIndex++;
	});
	// Appends play-count "0", if no play-count span was found, to file string.
	if (colIndex == 5) {
		csvContent += "0,";
	}
	// Appends rating to file string.
	csvContent += ratingMap[$(this).find("[data-col='rating']").attr("data-rating")];
	csvContent += "\n";
});
// Encodes file String and prompts user to download .csv output file.
var encodedUri = encodeURI(csvContent);
var link = document.createElement("a");
link.setAttribute("href", encodedUri);
link.setAttribute("download", playlistTitle + ".csv");
link.innerHTML= "Click Here to download";
document.body.appendChild(link);
link.click();