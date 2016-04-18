exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
  		var deferred = $.Deferred();

  		setTimeout(function(){
  			flag = value;
  			deferred.resolve(flag);	
  		}, 1000);

  		return deferred.promise();
  },

  manipulateRemoteData : function(url) {
  	var deferred = $.Deferred();

  	$.ajax(url).then(function(result){
	  	//console.log(result.people);
	  	var objectarr = result.people;
	  	var sortarr = [];
	  	$.each(objectarr, function(key, val){
	  		sortarr.push(val.name);
	  	});

	  	var sorted = sortarr.sort();
  		deferred.resolve(sorted);
  	});

  	return deferred.promise();
  }
};
