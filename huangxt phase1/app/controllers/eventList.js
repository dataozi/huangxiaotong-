var args = arguments[0] || {};
var fid = args.fid ||{};

// $.win.title = fid;

Alloy.Collections.webNews.fetch();
// // $.win.addEventListener("close",function(){
  // // $.destroy();
// })
function filterOrganizer(collection) { 
	return collection.where({organizer:fid});
}

function tableClick1(e){
	//console.log("tableclick");
	    var eventListController = Alloy.createController('jump',{
	    	    fid:e.row.fid
	    });
	   
	    Alloy.Globals.tabgroup.getActiveTab().open(eventListController.getView());
	   
}
Alloy.Collections.webNews.fetch();
Alloy.Collections.Venue.fetch();
