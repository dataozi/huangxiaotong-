var args = arguments[0] || {};
var fid = args.fid ||{};

Alloy.Collections.webNews.fetch();

Alloy.Collections.Venue.fetch();

function filterFunction(collection)
{
	console.log("filterFunction");
	console.log(fid);
	return collection.where({VenueID:fid});
}

function transform1(model) {
	
	var transform = model.toJSON();
	
	transform.title = transform.VenueID;
	
	transform.subtitle= transform.VenueName;
	
	transform.rightButton= Titanium.UI.iPhone.SystemButton.DISCLOSURE;
	
	
	return transform;
	
}
 