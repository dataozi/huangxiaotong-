$.index.open();
function btClick(e){
$.mapView.region={
	   latitude:22.339468,
	   longitude:114.181879,
	   latitudeDelta:0.001,
	   longitudeDelta:0.001
  };
};

function tableClick(e){
	//console.log("tableclick");
	    var eventListController = Alloy.createController('eventList',{
	    	    fid:e.row.fid
	    });
	   
	    $.eventTab.open(eventListController.getView());
	   
}

function tableClick2(e){
	var eventListController = Alloy.createController('transfer',{
		fid:e.row.fid
	});
	$.second.open(eventListController.getView());
}



function tableClick1(e){
	//console.log("tableclick");
	    var eventListController = Alloy.createController('jump',{
	    	    fid:e.row.fid
	    });
	   
	    $.main.open(eventListController.getView());
	   
}

function provideTitles(model) {
	
	var transform = model.toJSON();
	
	transform.title = transform.VenueID;
	
	transfrom.subtitle = transform.VenueName;
	
	transform.rightButton = Titanium.UI.iPhone.SystemButton.DISCLOSURE;
	
	return transform;
}




var lastColumn;


function catalog(model){
	
	
	var transform = model.toJSON();
	
	
	
	if (transform.CampusID == lastColumn) 
		transform.section = "";
	else
		transform.section = transform.CampusID;
		
	lastColumn = transform.CampusID;
	
	
	// transform.section ="haha";
	
	return transform;
}

Alloy.Collections.webNews.fetch();
Alloy.Collections.Venue.fetch();
Alloy.Globals.taggroup=$.index;

 function Clicktitle(e){
 	
	    if (e.clicksource == "rightButton")
	    
	    {
	    	var eventListController = Alloy.createController('fly',{fid:e.annotation.VenueID});
	    	    	    	
	    }
	   
	    $.touch.open(eventListController.getView());
	   
}
