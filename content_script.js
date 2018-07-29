


//var allSongRows = $( "tr.song-row" );
//$( "div.songlist-container > table.song-table" ).find( allSongRows );


console.log("TEST");
let csvContent = "data:text/csv;charset=utf-8,";
var allCells = $( "tr.song-row span.column-content" );
$( "table.song-table tr.song-row" ).each(function( index ) {
	  let row = $(this).find(allCells).toArray().join(",");
	  csvContent += row + "\r\n";
	});

var encodedUri = encodeURI(csvContent);
var link = document.createElement("a");
link.setAttribute("href", encodedUri);
link.setAttribute("download", "playlist.csv");
link.innerHTML= "Click Here to download";
document.body.appendChild(link);
link.click();