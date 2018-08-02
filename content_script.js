var ratingMap = {
    '5' : "Like",
    '3': "Dislike"
};

var csvContent = "data:text/csv;charset=utf-8,";
var allCells = $( "span" ); // Creates collection of all the cells that will written to the .csv
$( "table.song-table tr.song-row" ).each(function() {
	$(this).find(allCells).each(function () { 
		csvContent += $(this).text() + ",";
		});
	console.log($("[col='rating']").data("rating"));
	csvContent += ratingMap[$(this).find("[data-col='rating']").data("data-rating")] + "\r\n";
	});
var encodedUri = encodeURI(csvContent);
var link = document.createElement("a");
link.setAttribute("href", encodedUri);
link.setAttribute("download", "playlist.csv");
link.innerHTML= "Click Here to download";
document.body.appendChild(link);
link.click();