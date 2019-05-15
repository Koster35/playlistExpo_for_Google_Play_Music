/*
@app playlistExpo for Google Play Music™
@author Maxwell L Koster

Main extension functionality.
*/

// Maps extracted rating integers to English strings.
var ratingMap = {
	'5' : "Like",
	'4' : "Like",
    '1': "Dislike",
    '0': "",
	'null': "",
	'undefined': ""
};

// Appends proper file header and column headers to output String, sets index of the last column in the song table
if ($( "table.song-table tr.song-row:first td[data-col='index']" ).length) {
	// Index column exists
	var csvContent = "data:text/csv;charset=utf-8,Index,Title,Duration,Artist,Album,Play-count,Rating\n";
	var lastColIndex = 5;
} else {
	// Index column does not exist
	var csvContent = "data:text/csv;charset=utf-8,Title,Duration,Artist,Album,Play-count,Rating\n"; 
	var lastColIndex = 4;
}

var playlistTitle = $("div.title-row > h2").text();
// Extracts data for each song (row) and appends to output String.
var songCount = $("table.song-table > tbody").attr("data-count");
// Keeps track of loop iterations
var loopCounter = 0;
// Keeps track of which row is expected to be parsed next
var rowIndex = 0;
// Loops until all songs are parsed.
var interval = setInterval( function() {
	loopCounter++;
	$( "table.song-table tr.song-row" ).each(function() { 
			if (parseInt($(this).attr("data-index")) == rowIndex) {
				rowIndex++;
				var colIndex = 0;
				// Appends span element contents, if contents exist, to the file string.
				$(this).find( "span" ).each(function () { 
					var tmpText = $(this).text()
					csvContent += "\"" + tmpText.replace("#", "") + "\",";
					colIndex++;
				});
				// Appends play-count "0", if no play-count span was found, to file string.
				if (colIndex == lastColIndex) {
					csvContent += "0,";
				}
				// Appends rating to file string.
				csvContent += ratingMap[$(this).find("[data-col='rating']").attr("data-rating")];
				csvContent += "\n";
			}
		});
	if (rowIndex == songCount) {
		clearInterval(interval);
		console.log("PlaylistExpo: Parsing complete.");
		// Encodes file String and prompts user to download .csv output file.
		var encodedUri = encodeURI(csvContent);
		var link = document.createElement("a");
		link.setAttribute("href", encodedUri);
		link.setAttribute("download", playlistTitle + ".csv");
		link.innerHTML= "Click Here to download";
		document.body.appendChild(link);
		link.click();
	}
	if (loopCounter == 6000) {
		// Timeout after 5 minutes.
		throw new Error("PlaylistExpo: 5 minute timeout. Script terminated.");
	}
}, 50);