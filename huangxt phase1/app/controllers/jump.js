var args = arguments[0] || {};
var fid = args.fid ||{};
Alloy.Collections.webNews.fetch();


function filterFunction(collection){
	return collection.where ({id:fid});
}


function location(e){
	var eventListController = Alloy.createController('turn',{fid:e.source.turn});
	 Alloy.Globals.taggroup.getActiveTab().open(eventListController.getView());
	   // Martin
}

 // function Click1(e){
 	// alert ("Are you sure you want to log in?");
 // }
	   // ;
	   
function provideTitles(model) {
	
	var transform = model.toJSON();
	
	transform.title = transform.VenueID;
	
	transform.subtitle= transform.VenueName;
	
	transform.rightButton= Titanium.UI.iPhone.SystemButton.DISCLOSURE;
	
	
	return transform;
	
}