exports.definition = {
    config : {
        "columns": {
            
            "id":"text",
            "name":"text",
            "venue":"text",
            "date":"text",
            "startTime":"text",
            "endTime":"text",
            "organizer":"text",
            "quota":"text",
            "shortDes":"text",
            "fullDes":"text",
            "image":"text"
        },
        "URL": "http://thirdsail.herokuapp.com/event/json",
        "debug": 1, //debug mode enabled
        "useStrictValidation":1, // validates each item if all columns are present
        "adapter" : {
            "type" : "sqlrest",
            "collection_name" : "webNews",
            "idAttribute" : "id",
            "deletedAttribute": "my_custom_deleted_variable",

            // optimise the amount of data transfer from remote server to app
            "addModifedToUrl": true,
            "lastModifiedColumn": "modified"
        },
        
       // "parentNode":"posts",

        //optional
        "headers": { //your custom headers
            "Accept": "application/vnd.stackmob+json; version=0",
            "X-StackMob-API-Key": "your-stackmob-key"
        },

        // delete all models on fetch
        "deleteAllOnFetch": true
    },
    extendModel : function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection : function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};
