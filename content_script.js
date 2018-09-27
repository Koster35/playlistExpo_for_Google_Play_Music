/*
@title GPM Playlist Exporter
@author Maxwell L Koster
*/
var ratingMap = {
    '5' : "Like",
    '3': "Dislike"
};
// Appends file header and column headers to output String
var csvContent = "data:text/csv;charset=utf-8,Index,Title,Duration,Artist,Album,Play-count,Rating\r\n"; 
var playlistTitle = $("div.title-row > h2").text();
// Creates collection of all the cells that will written to the .csv
var allCells = $( "span" ); 
// Extracts data for each song (row) and appends to output String
$( "table.song-table tr.song-row" ).each(function() {
	$(this).find(allCells).each(function () { 
		csvContent += "\"" +$(this).text() + "\",";
		});
	console.log($("[data-col='rating']").attr("data-rating"));
	csvContent += ratingMap[$(this).find("[data-col='rating']").attr("data-rating")] + "\r\n";
	});
// Encodes file String and prompts user to download file
var encodedUri = encodeURI(csvContent);
var link = document.createElement("a");
link.setAttribute("href", encodedUri);
link.setAttribute("download", playlistTitle + ".csv");
link.innerHTML= "Click Here to download";
document.body.appendChild(link);
link.click();