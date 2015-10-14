var args = arguments[0] || {};
var fid = args.fid ||{};
Alloy.Collections.webNews.fetch();


function filterOrganizer(collection) { 
	return collection.where({venue:fid});
}

function tableClick1(e){
	//console.log("tableclick");
	    var eventListController = Alloy.createController('jump',{
	    	    fid:e.row.fid
	    });
	   
	    Alloy.Globals.tabgroup.getActiveTab().open(eventListController.getView());
	   
}
Alloy.Collections.webNews.fetch();
